#!/bin/bash

# This script renames all files with a .js extension to .jsx
# in the current directory and its subdirectories, excluding
# the node_modules and build directories.

find . -not \( -path "./node_modules/*" -prune \) -not \( -path "./build/*" -prune \) -type f -name "*.js" -exec rename 's/\.js$/.jsx/' {} +
