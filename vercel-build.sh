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

# Fix the imports in the app files by creating direct imports without path aliases
echo "Fixing imports in app files..."

# Create a replacement for the utils import that doesn't use @/ path aliases
mkdir -p node_modules/utils
cat > node_modules/utils/index.js << EOL
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
EOL

# Create a tsconfig.json with explicit path aliases
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
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "elevate"]
}
EOL

# Create a modified version of the contact-form component with direct imports
cat > app/contact/contact-form-local.tsx << EOL
'use client'

import { useState } from 'react'
import { Button } from '../../components/ui/button'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-bold text-green-700">Thank you!</h3>
          <p className="mt-2 text-green-600">Your message has been sent successfully.</p>
          <Button 
            onClick={() => setIsSubmitted(false)} 
            className="mt-4"
          >
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default ContactForm
EOL

# Update the contact/page.tsx to use the local component
sed -i 's|@/components/contact-form|./contact-form-local|g' app/contact/page.tsx 2>/dev/null || echo "Failed to update contact-form import"

# Add a modified version of the button component to each directory where it's needed
mkdir -p app/features/ui
mkdir -p app/login/ui
mkdir -p app/ui

# Copy the button component to each location
cp -v components/ui/button.tsx app/features/ui/ 2>/dev/null || echo "Failed to copy button to features"
cp -v components/ui/button.tsx app/login/ui/ 2>/dev/null || echo "Failed to copy button to login"
cp -v components/ui/button.tsx app/ui/ 2>/dev/null || echo "Failed to copy button to app"

# Update imports in the respective files
sed -i 's|@/components/ui/button|./ui/button|g' app/features/page.jsx 2>/dev/null || echo "Failed to update button import in features"
sed -i 's|@/components/ui/button|./ui/button|g' app/login/page.tsx 2>/dev/null || echo "Failed to update button import in login"
sed -i 's|@/components/ui/button|./ui/button|g' app/page.tsx 2>/dev/null || echo "Failed to update button import in main page"

# Copy the faq-accordion to features directory
cp -v components/faq-accordion.tsx app/features/ 2>/dev/null || echo "Failed to copy faq-accordion to features"
sed -i 's|@/components/faq-accordion|./faq-accordion|g' app/features/page.jsx 2>/dev/null || echo "Failed to update faq-accordion import"

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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
    };
    return config;
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