#!/usr/bin/env node
/*
 * Compiles every generated markdown file with @mdx-js/mdx (the same compiler
 * docusaurus v3 uses) to catch MDX syntax errors up front - the google site
 * takes ~30 minutes to build, this check takes seconds per thousand files.
 *
 * Usage: node bin/verify-mdx.mjs <docs-dir> [<docs-dir> ...]
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

// use the google site's mdx install (all sites pin the same docusaurus release)
const mdxPath = path.join(repoRoot, 'website', 'google', 'node_modules', '@mdx-js', 'mdx', 'index.js');
const { compile } = await import(pathToFileURL(mdxPath).href);

const dirs = process.argv.slice(2);
if (dirs.length === 0) {
    console.error('usage: node bin/verify-mdx.mjs <docs-dir> [...]');
    process.exit(1);
}

let checked = 0;
const failures = [];

async function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await walk(full);
        } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
            checked++;
            // strip frontmatter - docusaurus removes it before MDX compilation
            const value = fs.readFileSync(full, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
            try {
                await compile({ value, path: full }, { format: 'mdx' });
            } catch (err) {
                failures.push({ file: full, reason: err.reason || err.message, line: err.line });
            }
        }
    }
}

for (const dir of dirs) {
    await walk(dir);
}

if (failures.length > 0) {
    console.error(`verify-mdx: ${failures.length} of ${checked} files FAILED:`);
    for (const f of failures.slice(0, 20)) {
        console.error(`  ${f.file}:${f.line ?? '?'} - ${f.reason}`);
    }
    if (failures.length > 20) console.error(`  ... and ${failures.length - 20} more`);
    process.exit(1);
}
console.log(`verify-mdx: all ${checked} files compile`);
