# StackQL Provider Google

Generates OpenAPI 3.x specification from Google Discovery documents and creates [StackQL](https://github.com/stackql/stackql) provider specifications.

> OpenAPI 3 Specifications for Google Cloud APIs can be found at [__stackql/stackql-provider-registry__](https://github.com/stackql/stackql-provider-registry/tree/dev/providers/src/googleapis.com/v00.00.00000/services)

## Quick start (Make)

All pipeline steps are available as make targets (on Windows run from Git Bash):

```bash
make all                 # install, generate, test, smoke test, generate and build docs
make install             # npm install
make generate            # generate all providers (or generate-google, generate-googleworkspace, generate-googleadmin, generate-firebase)
make test                # provider metadata tests (or test-<provider>) - uses WSL on Windows
make smoke-test          # end-to-end GCP smoke test using the locally generated provider (requires GOOGLE_CREDENTIALS)
make smoke-test-live     # same smoke test against the latest provider in the hosted registry
make docs                # generate docusaurus markdown docs (or docs-<provider>)
make docs-build          # build the docusaurus microsites (or docs-build-<provider>)
make docs-serve-google   # serve a microsite locally
```

The sections below document the underlying commands that the make targets wrap.

## Overview

This script performs the following steps:
1. Gets the [root discovery document for all Google APIs](https://discovery.googleapis.com/discovery/v1/apis)
2. Gets each respective service discovery document from the root discovery document (can be filtered to only fetch `preferred` service versions)
3. Converts each service discovery document to an OpenAPI 3.x specification, written as a `yaml` file to the `openapi` folder

## Usage

Mac/Linux:

```bash
npm install
bin/google-discovery-to-openapi.mjs generate googleapis.com --debug
bin/google-discovery-to-openapi.mjs generate googleworkspace --debug
bin/google-discovery-to-openapi.mjs generate googleadmin --debug
bin/google-discovery-to-openapi.mjs generate firebase --debug
```

Windows/PowerShell:
    
```powershell
npm install
node .\bin\google-discovery-to-openapi.mjs generate googleapis.com --debug
```

## Tests

To Run tests locally, clone [stackql-provider-tests](https://github.com/stackql/stackql-provider-tests), and run locally:

```bash
# run from the directory you cloned into
cd ../../../stackql/core/stackql-provider-tests/
sh test-provider.sh \
google \
false \
/mnt/c/LocalGitRepos/stackql-registry/providers/stackql-provider-google/openapi \
true

sh test-provider.sh \
googleworkspace \
false \
/mnt/c/LocalGitRepos/stackql-registry/providers/stackql-provider-google/openapi \
true

sh test-provider.sh \
googleadmin \
false \
/mnt/c/LocalGitRepos/stackql-registry/providers/stackql-provider-google/openapi \
true

sh test-provider.sh \
firebase \
false \
/mnt/c/LocalGitRepos/stackql-registry/providers/stackql-provider-google/openapi \
true

cd ../../../stackql-registry/providers/stackql-provider-google/
```

## Smoke tests

`test/smoke-test-google.js` runs an end-to-end test against a real GCP project (default `stackql-demo`), exercising query, mutation and lifecycle operations: it creates a VPC, subnet and e2-micro VM (observing state via `SELECT` after each step), stops and starts the VM via `EXEC` lifecycle methods, deletes everything, then creates, reads, updates and deletes a GCS bucket.

Requires `stackql` on the PATH and `GOOGLE_CREDENTIALS` set to a service account key.

```bash
# against the locally generated provider in ./openapi
make smoke-test

# against the latest google provider in the hosted registry
make smoke-test-live

# options
node test/smoke-test-google.js [--live] [--project <id>] [--region <region>] [--zone <zone>]
```

## Inspect

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/openapi"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}'", "verifyConfig": {"nopVerify": true}}'
./stackql shell --registry="${REG_STR}"
```

## Publish to the StackQL Provider Registry

Raise a PR to add the provider from `openapi/src` to the [stackql-provider-registry](https://github.com/stackql/stackql-provider-registry/tree/dev/providers/src).  Once merged into the `dev` branch it will be tested and deployed to the `dev` registry, which can be accessed via:

```bash
# google cloud shell example...
curl -L https://bit.ly/stackql-zip -O && unzip stackql-zip
# use the following to test from the dev provider registry with interactiva authentication
DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
AUTH='{ "google": { "type": "interactive" }}'
./stackql --auth="${AUTH}" --registry="${DEV_REG}" shell
```

## Generate web docs

```bash
npm i

# google
rm -rf ./website/google/docs/*
npm run generate-docs -- \
  --provider-name google \
  --provider-dir ./openapi/src/googleapis.com/v00.00.00000 \
  --output-dir ./website/google \
  --provider-data-dir ./docgen/provider-data/google
sh bin/fix-broken-links-google.sh   
cd website/google
yarn build

# googleadmin
rm -rf ./website/googleadmin/docs/*
npm run generate-docs -- \
  --provider-name googleadmin \
  --provider-dir ./openapi/src/googleadmin/v00.00.00000 \
  --output-dir ./website/googleadmin \
  --provider-data-dir ./docgen/provider-data/googleadmin
sh bin/fix-broken-links-googleadmin.sh  

# googleworkspace
rm -rf ./website/googleworkspace/docs/*
npm run generate-docs -- \
  --provider-name googleworkspace \
  --provider-dir ./openapi/src/googleworkspace/v00.00.00000 \
  --output-dir ./website/googleworkspace \
  --provider-data-dir ./docgen/provider-data/googleworkspace
sh bin/fix-broken-links-googleworkspace.sh 

# firebase
rm -rf ./website/firebase/docs/*
npm run generate-docs -- \
  --provider-name firebase \
  --provider-dir ./openapi/src/firebase/v00.00.00000 \
  --output-dir ./website/firebase \
  --provider-data-dir ./docgen/provider-data/firebase
sh bin/fix-broken-links-firebase.sh  
```  

### 8. Test web docs locally

```bash
# google
cd website/google
yarn start

# googleadmin
cd website/googleadmin
yarn start

# googleworkspace
cd website/googleworkspace
yarn start

# firebase
cd website/firebase
yarn start
```
