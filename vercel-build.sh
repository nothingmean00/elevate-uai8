#!/bin/bash

# This script copies files from the inner elevate directory to the main directory structure
# This is needed because of the duplicated structure that's causing build issues

# Create necessary directories
mkdir -p components
mkdir -p components/ui
mkdir -p app
mkdir -p app/contact
mkdir -p app/features
mkdir -p app/login
mkdir -p public
mkdir -p lib

# Echo for debugging
echo "Directory structure before copying:"
ls -la

# Echo inner structure for debugging
echo "Inner elevate structure:"
ls -la elevate || true

# Copy files from the inner elevate directory to the main directory
echo "Copying files..."
cp -rv elevate/components/* components/ 2>/dev/null || echo "Failed to copy components"
cp -rv elevate/app/* app/ 2>/dev/null || echo "Failed to copy app"
cp -rv elevate/public/* public/ 2>/dev/null || echo "Failed to copy public"
cp -rv elevate/lib/* lib/ 2>/dev/null || echo "Failed to copy lib"

# Copy any other configuration files needed
cp -v elevate/next.config.mjs . 2>/dev/null || echo "Failed to copy next.config.mjs"
cp -v elevate/tailwind.config.js . 2>/dev/null || echo "Failed to copy tailwind.config.js"
cp -v elevate/postcss.config.mjs . 2>/dev/null || echo "Failed to copy postcss.config.mjs"

# Create tsconfig.json with explicit path aliases
echo "Creating tsconfig.json with path aliases..."
cat > tsconfig.json << EOL
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "elevate"]
}
EOL

# Print debug info about the most important component files
echo "Verifying components exist:"
ls -la components/contact-form.tsx || echo "Missing contact-form.tsx"
ls -la components/faq-accordion.tsx || echo "Missing faq-accordion.tsx"
ls -la components/ui/button.tsx || echo "Missing ui/button.tsx"
ls -la components/ui/accordion.tsx || echo "Missing ui/accordion.tsx"

# Echo for debugging
echo "Directory structure after copying:"
ls -la
echo "Components directory contents:"
find components -type f | sort

# Create a next.config.mjs if it doesn't exist
if [ ! -f "next.config.mjs" ]; then
  echo "Creating next.config.mjs..."
  cat > next.config.mjs << EOL
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
EOL
fi

# Now build the project
echo "Installing dependencies..."
yarn install

echo "Starting build..."
yarn build 