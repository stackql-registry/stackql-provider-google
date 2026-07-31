#!/usr/bin/env node
/*
 * End-to-end smoke test for the google provider.
 *
 * Exercises query (SELECT), mutation (INSERT/UPDATE/DELETE) and lifecycle (EXEC)
 * operations against primitive GCP resources in a real project:
 *
 *   1. create a VPC network, observe state
 *   2. create a subnet in the VPC, observe state
 *   3. create a VM (e2-micro, no external IP), observe state
 *   4. stop the VM (EXEC), observe state
 *   5. start the VM (EXEC), observe state
 *   6. delete the VM, subnet and VPC, observing state each time
 *   7. create, read, update (labels) and delete a GCS bucket
 *
 * By default the locally generated provider (./openapi) is used. Pass --live to
 * run the same test against the latest google provider from the hosted registry.
 *
 * Usage:
 *   node test/smoke-test-google.js [--live] [--project <id>] [--region <region>] [--zone <zone>]
 *
 * Requires:
 *   - stackql on the PATH (or STACKQL_BIN set)
 *   - GOOGLE_CREDENTIALS set to a service account key (JSON) with compute/storage admin
 */

import { spawnSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// options
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const getArg = (flag, dflt) => {
    const i = args.indexOf(flag);
    return i !== -1 && args[i + 1] ? args[i + 1] : dflt;
};

const live = args.includes('--live');
const project = getArg('--project', process.env.GOOGLE_PROJECT || 'stackql-demo');
const region = getArg('--region', process.env.GOOGLE_REGION || 'us-central1');
const zone = getArg('--zone', process.env.GOOGLE_ZONE || `${region}-a`);
const stackqlBin = process.env.STACKQL_BIN || 'stackql';

if (!process.env.GOOGLE_CREDENTIALS) {
    console.error('GOOGLE_CREDENTIALS must be set to a service account key (JSON string)');
    process.exit(1);
}

// unique-ish suffix so concurrent/failed runs do not collide
const suffix = Date.now().toString(36);
const vpcName = `smoke-${suffix}-vpc`;
const subnetName = `smoke-${suffix}-subnet`;
const vmName = `smoke-${suffix}-vm`;
const bucketName = `stackql-smoke-${suffix}`;

const machineType = `https://compute.googleapis.com/compute/v1/projects/${project}/zones/${zone}/machineTypes/e2-micro`;
const sourceImage = 'https://compute.googleapis.com/compute/v1/projects/debian-cloud/global/images/family/debian-12';

// ---------------------------------------------------------------------------
// stackql invocation helpers
// ---------------------------------------------------------------------------

const openapiDir = path.join(repoRoot, 'openapi');
const approot = path.join(repoRoot, 'test', '.stackql', live ? 'live' : 'local');
fs.mkdirSync(approot, { recursive: true });

// note: the Windows stackql binary expects file://C:/path (two slashes), not the
// file:///C:/path form produced by pathToFileURL
const localRegistry = JSON.stringify({
    url: `file://${openapiDir.replace(/\\/g, '/')}`,
    localDocRoot: openapiDir.replace(/\\/g, '/'),
    verifyConfig: { nopVerify: true }
});

function stackqlArgs(outputFormat) {
    const a = ['exec', '--approot', approot, '--output', outputFormat];
    if (!live) {
        a.push(`--registry=${localRegistry}`);
    }
    return a;
}

function runStackql(sql, outputFormat = 'json') {
    const res = spawnSync(stackqlBin, [...stackqlArgs(outputFormat), sql], {
        encoding: 'utf8',
        maxBuffer: 64 * 1024 * 1024
    });
    if (res.error) {
        throw new Error(`failed to launch stackql: ${res.error.message}`);
    }
    return { stdout: (res.stdout || '').trim(), stderr: (res.stderr || '').trim(), status: res.status };
}

function fail(msg) {
    console.error(`\nFAIL: ${msg}`);
    process.exitCode = 1;
    throw new Error(msg);
}

// run a SELECT, return rows (empty array when no rows / resource not found)
function select(sql, { quiet = false } = {}) {
    if (!quiet) console.log(`  sql> ${sql}`);
    const { stdout, stderr } = runStackql(sql, 'json');
    if (stdout) {
        try {
            const rows = JSON.parse(stdout);
            // stackql emits the literal string "null" on empty/not-found reads
            const normalized = rows === null ? [] : Array.isArray(rows) ? rows : [rows];
            if (!quiet) console.log(`  <-- ${JSON.stringify(normalized)}`);
            return normalized;
        } catch {
            /* fall through */
        }
    }
    // no parsable output: not-found reads surface as errors, treat as zero rows
    if (!quiet) console.log(`  <-- [] (${(stderr || 'no rows').split('\n')[0]})`);
    return [];
}

// run a mutation (INSERT/UPDATE/DELETE) or lifecycle EXEC, fail on error
function mutate(sql, { allowErrors = false } = {}) {
    console.log(`  sql> ${sql.replace(/\s+/g, ' ').trim()}`);
    const { stdout, stderr, status } = runStackql(sql, 'text');
    const out = [stdout, stderr].filter(Boolean).join(' | ');
    console.log(`  <-- ${out.split('\n').join(' ')}`);
    const errored = status !== 0 || /(^|\s)error[:\s]/i.test(out) || /failed/i.test(out);
    if (errored && !allowErrors) {
        fail(`mutation failed: ${out}`);
    }
    return !errored;
}

const sleep = (s) => new Promise((r) => setTimeout(r, s * 1000));

// poll until predicate over rows is true
async function waitFor(desc, sql, predicate, { retries = 30, delay = 10 } = {}) {
    process.stdout.write(`  waiting for ${desc}`);
    for (let i = 0; i < retries; i++) {
        const rows = select(sql, { quiet: true });
        if (predicate(rows)) {
            console.log(` ... ok`);
            console.log(`  state> ${JSON.stringify(rows)}`);
            return rows;
        }
        process.stdout.write('.');
        await sleep(delay);
    }
    console.log('');
    fail(`timed out waiting for ${desc}`);
}

// retry a mutation until it succeeds - needed where GCP is eventually consistent
// (creates referencing a just-created resource return resourceNotReady, deletes of
// resources with in-flight dependents return resourceInUse)
async function mutateWithRetry(sql, { retries = 12, delay = 10 } = {}) {
    for (let i = 0; i < retries; i++) {
        if (mutate(sql, { allowErrors: true })) return;
        await sleep(delay);
    }
    fail(`mutation did not succeed after ${retries} attempts: ${sql}`);
}

function step(title) {
    console.log(`\n=== ${title} ===`);
}

// ---------------------------------------------------------------------------
// state observation queries
// ---------------------------------------------------------------------------

const vpcState = `SELECT name, autoCreateSubnetworks, selfLink FROM google.compute.networks WHERE name = '${vpcName}' AND project = '${project}'`;
const subnetState = `SELECT name, ipCidrRange, selfLink FROM google.compute.subnetworks WHERE subnetwork = '${subnetName}' AND project = '${project}' AND region = '${region}'`;
const vmState = `SELECT name, status, machineType FROM google.compute.instances WHERE instance = '${vmName}' AND project = '${project}' AND zone = '${zone}'`;
const bucketState = `SELECT name, location, storageClass, labels FROM google.storage.buckets WHERE bucket = '${bucketName}'`;

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

const started = Date.now();
const created = { vpc: false, subnet: false, vm: false, bucket: false };

async function main() {
    console.log(`google provider smoke test`);
    console.log(`  mode:    ${live ? 'live (hosted registry)' : 'local (./openapi)'}`);
    console.log(`  project: ${project}, region: ${region}, zone: ${zone}`);
    console.log(`  names:   ${vpcName}, ${subnetName}, ${vmName}, gs://${bucketName}`);

    if (live) {
        step('pull latest google provider from registry');
        mutate('REGISTRY PULL google');
    }

    // -----------------------------------------------------------------------
    // networking + compute lifecycle
    // -----------------------------------------------------------------------

    step('create VPC network');
    mutate(`INSERT INTO google.compute.networks(project, data__name, data__autoCreateSubnetworks, data__routingConfig)
            SELECT '${project}', '${vpcName}', false, '{"routingMode": "REGIONAL"}'`);
    created.vpc = true;
    const vpcRows = await waitFor('VPC to be created', vpcState, (r) => r.length === 1);
    const vpcLink = vpcRows[0].selfLink;

    step('create subnet');
    await mutateWithRetry(`INSERT INTO google.compute.subnetworks(project, region, data__name, data__network, data__ipCidrRange, data__privateIpGoogleAccess)
            SELECT '${project}', '${region}', '${subnetName}', '${vpcLink}', '10.10.0.0/24', true`, { retries: 18, delay: 10 });
    created.subnet = true;
    const subnetRows = await waitFor('subnet to be created', subnetState, (r) => r.length === 1);
    const subnetLink = subnetRows[0].selfLink;

    step('create VM (e2-micro)');
    const disks = JSON.stringify([{
        autoDelete: true,
        boot: true,
        mode: 'READ_WRITE',
        type: 'PERSISTENT',
        initializeParams: { diskSizeGb: 10, sourceImage }
    }]);
    const nics = JSON.stringify([{ subnetwork: subnetLink }]);
    await mutateWithRetry(`INSERT INTO google.compute.instances(zone, project, data__name, data__machineType, data__canIpForward, data__deletionProtection, data__scheduling, data__networkInterfaces, data__disks)
            SELECT '${zone}', '${project}', '${vmName}', '${machineType}', false, false, '{"automaticRestart": true}', '${nics}', '${disks}'`, { retries: 12, delay: 10 });
    created.vm = true;
    await waitFor('VM to be RUNNING', vmState, (r) => r.length === 1 && r[0].status === 'RUNNING');

    step('stop VM (lifecycle EXEC)');
    mutate(`EXEC google.compute.instances.stop @instance = '${vmName}', @project = '${project}', @zone = '${zone}'`);
    await waitFor('VM to be TERMINATED', vmState, (r) => r.length === 1 && r[0].status === 'TERMINATED');

    step('start VM (lifecycle EXEC)');
    mutate(`EXEC google.compute.instances.start @instance = '${vmName}', @project = '${project}', @zone = '${zone}'`);
    await waitFor('VM to be RUNNING again', vmState, (r) => r.length === 1 && r[0].status === 'RUNNING');

    step('delete VM');
    mutate(`DELETE FROM google.compute.instances WHERE instance = '${vmName}' AND project = '${project}' AND zone = '${zone}'`);
    await waitFor('VM to be deleted', vmState, (r) => r.length === 0, { retries: 36 });
    created.vm = false;

    step('delete subnet');
    await mutateWithRetry(`DELETE FROM google.compute.subnetworks WHERE subnetwork = '${subnetName}' AND project = '${project}' AND region = '${region}'`);
    await waitFor('subnet to be deleted', subnetState, (r) => r.length === 0);
    created.subnet = false;

    step('delete VPC network');
    await mutateWithRetry(`DELETE FROM google.compute.networks WHERE network = '${vpcName}' AND project = '${project}'`, { retries: 20 });
    await waitFor('VPC to be deleted', vpcState, (r) => r.length === 0);
    created.vpc = false;

    // -----------------------------------------------------------------------
    // GCS bucket CRUD
    // -----------------------------------------------------------------------

    step('create GCS bucket');
    mutate(`INSERT INTO google.storage.buckets(project, data__name, data__location, data__storageClass)
            SELECT '${project}', '${bucketName}', 'US', 'STANDARD'`);
    created.bucket = true;
    await waitFor('bucket to be created', bucketState, (r) => r.length === 1 && r[0].name === bucketName);

    step('read GCS bucket');
    const bucketRows = select(bucketState);
    if (bucketRows.length !== 1 || bucketRows[0].location !== 'US' || bucketRows[0].storageClass !== 'STANDARD') {
        fail('bucket read did not return expected location/storageClass');
    }

    step('update GCS bucket (labels)');
    mutate(`UPDATE google.storage.buckets SET data__labels = '{"provisioner": "stackql", "purpose": "smoke-test"}' WHERE bucket = '${bucketName}'`);
    await waitFor('bucket labels to be applied', bucketState, (r) => {
        if (r.length !== 1 || !r[0].labels) return false;
        const labels = typeof r[0].labels === 'string' ? JSON.parse(r[0].labels) : r[0].labels;
        return labels.provisioner === 'stackql' && labels.purpose === 'smoke-test';
    }, { retries: 6, delay: 5 });

    step('delete GCS bucket');
    mutate(`DELETE FROM google.storage.buckets WHERE bucket = '${bucketName}'`);
    await waitFor('bucket to be deleted', bucketState, (r) => r.length === 0, { retries: 6, delay: 5 });
    created.bucket = false;

    const mins = ((Date.now() - started) / 60000).toFixed(1);
    console.log(`\nPASS: google smoke test (${live ? 'live' : 'local'}) completed in ${mins} minutes`);
}

// best-effort cleanup of anything left behind on failure
async function cleanup() {
    console.log('\n=== cleanup (best effort) ===');
    if (created.vm) {
        mutate(`DELETE FROM google.compute.instances WHERE instance = '${vmName}' AND project = '${project}' AND zone = '${zone}'`, { allowErrors: true });
        await waitFor('VM to be deleted', vmState, (r) => r.length === 0, { retries: 36 }).catch(() => {});
    }
    if (created.subnet) {
        await mutateWithRetry(`DELETE FROM google.compute.subnetworks WHERE subnetwork = '${subnetName}' AND project = '${project}' AND region = '${region}'`).catch(() => {});
    }
    if (created.vpc) {
        await mutateWithRetry(`DELETE FROM google.compute.networks WHERE network = '${vpcName}' AND project = '${project}'`, { retries: 20 }).catch(() => {});
    }
    if (created.bucket) {
        mutate(`DELETE FROM google.storage.buckets WHERE bucket = '${bucketName}'`, { allowErrors: true });
    }
}

main().catch(async (err) => {
    console.error(`\nsmoke test failed: ${err.message}`);
    process.exitCode = 1;
    await cleanup().catch(() => {});
});
