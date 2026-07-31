#!/usr/bin/env bash
#
# Runs the stackql-provider-tests metadata harness (SHOW/DESCRIBE/SHOW INSERT over
# every service and resource) for a provider against the locally generated registry
# in ./openapi.
#
# The harness (https://github.com/stackql/stackql-provider-tests) is Linux-only
# (downloads a Linux stackql binary, uses pgrep/venv), so on Windows this script
# re-invokes itself inside WSL. Set STACKQL_PROVIDER_TESTS_DIR if the harness is
# cloned somewhere other than ../../../../stackql/core/stackql-provider-tests.
#
# Usage: sh test/run-provider-tests.sh <provider>   # google | googleworkspace | googleadmin | firebase

set -e

provider="$1"
if [ -z "$provider" ]; then
    echo "usage: $0 <provider>"
    exit 1
fi

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"
TESTS_DIR="${STACKQL_PROVIDER_TESTS_DIR:-$REPO_ROOT/../../../../stackql/core/stackql-provider-tests}"
REG_PATH="$REPO_ROOT/openapi"

if [ ! -d "$REG_PATH/src" ]; then
    echo "no generated provider found at $REG_PATH - run 'make generate' first"
    exit 1
fi

if [ ! -d "$TESTS_DIR" ]; then
    echo "stackql-provider-tests not found at $TESTS_DIR (set STACKQL_PROVIDER_TESTS_DIR)"
    exit 1
fi

case "$(uname -s)" in
    MINGW*|MSYS*|CYGWIN*)
        WIN_TESTS_DIR="$(cygpath -w "$TESTS_DIR")"
        WIN_REG_PATH="$(cygpath -w "$REG_PATH")"
        WSL_TESTS_DIR="$(wsl.exe -e wslpath -a "$WIN_TESTS_DIR" | tr -d '\r\0')"
        WSL_REG_PATH="$(wsl.exe -e wslpath -a "$WIN_REG_PATH" | tr -d '\r\0')"
        echo "running provider tests for '$provider' in WSL (harness: $WSL_TESTS_DIR, registry: $WSL_REG_PATH)"
        RUN_CMD="wsl.exe -e bash -lc"
        RUN_ARG="cd '$WSL_TESTS_DIR' && sh test-provider.sh $provider false '$WSL_REG_PATH' true"
        ;;
    *)
        RUN_CMD="sh -c"
        RUN_ARG="cd '$TESTS_DIR' && sh test-provider.sh $provider false '$REG_PATH' true"
        ;;
esac

# the harness always exits 0 (it ends by stopping the server) and tolerates some
# "ERROR [" lines (e.g. SHOW INSERT on resources with no insert method), but it
# aborts before printing its final summary on a fatal error - so treat the presence
# of the summary as the pass signal
LOG_FILE="$(mktemp)"
$RUN_CMD "$RUN_ARG" 2>&1 | tee "$LOG_FILE"
if ! grep -q "services processed" "$LOG_FILE"; then
    echo "provider tests FAILED for $provider (no summary printed - harness aborted, see errors above)"
    rm -f "$LOG_FILE"
    exit 1
fi
rm -f "$LOG_FILE"
echo "provider tests passed for $provider"
