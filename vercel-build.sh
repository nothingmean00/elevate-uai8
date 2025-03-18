#!/bin/bash

# This script copies files from the inner elevate directory to the main directory structure
# This is needed because of the duplicated structure that's causing build issues

# Create necessary directories
mkdir -p components
mkdir -p app
mkdir -p public

# Copy files from the inner elevate directory to the main directory
cp -r elevate/components/* components/
cp -r elevate/app/* app/
cp -r elevate/public/* public/ 2>/dev/null || true

# Copy any other configuration files needed
cp elevate/next.config.mjs . 2>/dev/null || true
cp elevate/tailwind.config.js . 2>/dev/null || true
cp elevate/postcss.config.mjs . 2>/dev/null || true

# Now build the project
yarn install
yarn build 