#!/bin/bash

set -e

rm -rf lib src/data/icons/react*
bash ./scripts/sync-families-dispatch.sh
node scripts/buildReactIcons.js

yarn tsc --watch

# (
#     cd ../../flow-support
#     yarn copy
# )
