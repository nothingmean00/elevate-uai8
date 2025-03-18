#!/bin/bash

# This script fixes the directory structure by moving all files from the inner elevate directory
# to the correct locations in the main project. This should be run once to permanently
# fix the structure.

# Move to the repository root
cd "$(dirname "$0")"

# Create necessary directories if they don't exist
mkdir -p components
mkdir -p app
mkdir -p public
mkdir -p lib
mkdir -p hooks

# Check if there are files to move
if [ -d "elevate/components" ]; then
  echo "Moving files from inner elevate directory..."
  
  # Copy files from the inner elevate directory to the main directory
  cp -r elevate/components/* components/ 2>/dev/null || true
  cp -r elevate/app/* app/ 2>/dev/null || true
  cp -r elevate/public/* public/ 2>/dev/null || true
  cp -r elevate/lib/* lib/ 2>/dev/null || true
  cp -r elevate/hooks/* hooks/ 2>/dev/null || true
  
  # Copy config files
  cp elevate/next.config.mjs . 2>/dev/null || true
  cp elevate/tailwind.config.js . 2>/dev/null || true
  cp elevate/postcss.config.mjs . 2>/dev/null || true
  cp elevate/tailwind.config.ts . 2>/dev/null || true
  cp elevate/components.json . 2>/dev/null || true
  
  echo "Directory structure fixed. You can now safely delete the elevate subdirectory."
else
  echo "No inner elevate directory found or it's already been moved."
fi 