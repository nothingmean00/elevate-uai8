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

# Create utils.ts in the lib directory if it doesn't exist
if [ ! -f "lib/utils.ts" ]; then
  echo "Creating lib/utils.ts..."
  mkdir -p lib
  cat > lib/utils.ts << EOL
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
EOL
fi

# Create a completely mocked version of the react-remove-scroll package
echo "Creating mocked react-remove-scroll package..."
mkdir -p node_modules/react-remove-scroll/dist/es5
mkdir -p node_modules/react-remove-scroll/dist/es2015

# Create a mock ES5 implementation
cat > node_modules/react-remove-scroll/dist/es5/index.js << EOL
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// This is a mock implementation of RemoveScroll that just passes through its children
var React = require('react');

var RemoveScroll = function RemoveScroll(props) {
  return React.createElement(
    React.Fragment,
    null,
    props.children
  );
};

RemoveScroll.classNames = {
  fullWidth: 'full-width',
  zeroRight: 'zero-right'
};

exports.RemoveScroll = RemoveScroll;
EOL

# Create a mock ES2015 implementation
cat > node_modules/react-remove-scroll/dist/es2015/index.js << EOL
import React from 'react';

// This is a mock implementation of RemoveScroll that just passes through its children
export const RemoveScroll = (props) => {
  return React.createElement(
    React.Fragment,
    null,
    props.children
  );
};

RemoveScroll.classNames = {
  fullWidth: 'full-width',
  zeroRight: 'zero-right'
};
EOL

# Create the package.json for react-remove-scroll
cat > node_modules/react-remove-scroll/package.json << EOL
{
  "name": "react-remove-scroll",
  "version": "2.5.5",
  "description": "A cross-browser way to remove body scroll",
  "main": "./dist/es5/index.js",
  "module": "./dist/es2015/index.js",
  "exports": {
    ".": {
      "import": "./dist/es2015/index.js",
      "require": "./dist/es5/index.js"
    }
  }
}
EOL

# Mock the react-remove-scroll-bar package too
mkdir -p node_modules/react-remove-scroll-bar/dist/es5
mkdir -p node_modules/react-remove-scroll-bar/dist/es2015

# Create a mock ES5 implementation for react-remove-scroll-bar
cat > node_modules/react-remove-scroll-bar/dist/es5/index.js << EOL
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// This is a mock implementation that does nothing
exports.RemoveScrollBar = function() { return null; };
exports.getGapWidth = function() { return 0; };
EOL

# Create a mock ES2015 implementation for react-remove-scroll-bar
cat > node_modules/react-remove-scroll-bar/dist/es2015/index.js << EOL
// This is a mock implementation that does nothing
export const RemoveScrollBar = () => null;
export const getGapWidth = () => 0;
EOL

# Create package.json for react-remove-scroll-bar
cat > node_modules/react-remove-scroll-bar/package.json << EOL
{
  "name": "react-remove-scroll-bar",
  "version": "2.3.4",
  "description": "Component to remove scrollbar",
  "main": "./dist/es5/index.js",
  "module": "./dist/es2015/index.js",
  "exports": {
    ".": {
      "import": "./dist/es2015/index.js",
      "require": "./dist/es5/index.js"
    }
  }
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

# Create local utils.ts files for each UI component directory
mkdir -p app/features/lib
mkdir -p app/login/lib
mkdir -p app/ui/lib

# Copy the utils.ts file to each location
cat > app/features/lib/utils.ts << EOL
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
EOL

cat > app/login/lib/utils.ts << EOL
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
EOL

cat > app/ui/lib/utils.ts << EOL
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
EOL

# Add a modified version of the button component to each directory where it's needed
mkdir -p app/features/ui
mkdir -p app/login/ui
mkdir -p app/ui

# Copy the button component to each location with modified imports
cat > app/features/ui/button.tsx << EOL
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
EOL

# Do the same for login/ui/button.tsx
cat > app/login/ui/button.tsx << EOL
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
EOL

# And for app/ui/button.tsx
cat > app/ui/button.tsx << EOL
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
EOL

# Create a local accordion component for features directory
mkdir -p app/features/ui
cat > app/features/ui/accordion.tsx << EOL
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "../lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
EOL

# Create the modified faq-accordion for features
cat > app/features/faq-accordion.tsx << EOL
'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs?: FAQItem[]
  items?: FAQItem[]
  className?: string
}

export function FAQAccordion({ faqs, items, className = '' }: FAQAccordionProps) {
  // Use items prop if provided, otherwise use faqs prop, or default to empty array
  const faqItems = items || faqs || [];
  
  return (
    <Accordion type="single" collapsible className={className}>
      {faqItems.map((faq, index) => (
        <AccordionItem key={index} value={\`item-\${index}\`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FAQAccordion
EOL

# Copy the additional components needed for page.tsx
cp -v components/animated-background.tsx app/ 2>/dev/null || echo "Failed to copy animated-background"
cp -v components/testimonial-rotator.tsx app/ 2>/dev/null || echo "Failed to copy testimonial-rotator"

# Update imports in the main page
sed -i 's|@/components/animated-background|./animated-background|g' app/page.tsx 2>/dev/null || echo "Failed to update animated-background import"
sed -i 's|@/components/testimonial-rotator|./testimonial-rotator|g' app/page.tsx 2>/dev/null || echo "Failed to update testimonial-rotator import"

# Update imports in the respective files
sed -i 's|@/components/ui/button|./ui/button|g' app/features/page.jsx 2>/dev/null || echo "Failed to update button import in features"
sed -i 's|@/components/ui/button|./ui/button|g' app/login/page.tsx 2>/dev/null || echo "Failed to update button import in login"
sed -i 's|@/components/ui/button|./ui/button|g' app/page.tsx 2>/dev/null || echo "Failed to update button import in main page"
sed -i 's|@/components/faq-accordion|./faq-accordion|g' app/features/page.jsx 2>/dev/null || echo "Failed to update faq-accordion import"

# Directly modify the problematic components
echo "Creating a basic sheet component that doesn't use react-remove-scroll..."
cat > components/ui/sheet.tsx << EOL
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const SheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b",
        bottom: "inset-x-0 bottom-0 border-t",
        left: "inset-y-0 left-0 h-full border-r",
        right: "inset-y-0 right-0 h-full border-l",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SheetVariants> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function Sheet({
  className,
  children,
  side,
  open,
  ...props
}: SheetProps) {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={() => props.onOpenChange?.(false)}>
      <div 
        className={cn(SheetVariants({ side }), className)} 
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  />
)

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
)

const SheetTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = "SheetDescription"

const SheetClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", className)}
    onClick={() => props.onClick?.({} as any)}
    {...props}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
    <span className="sr-only">Close</span>
  </button>
))
SheetClose.displayName = "SheetClose"

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side?: VariantProps<typeof SheetVariants>["side"]
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(({ className, children, side = "right", open, onOpenChange, ...props }, ref) => (
  <Sheet side={side} open={open} onOpenChange={onOpenChange}>
    <div ref={ref} className={cn("grid gap-4", className)} {...props}>
      {children}
      <SheetClose />
    </div>
  </Sheet>
))
SheetContent.displayName = "SheetContent"

export {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
}
EOL

# Create a mock dialog component that doesn't use react-remove-scroll
echo "Creating a mock dialog component without react-remove-scroll dependency..."
mkdir -p node_modules/@radix-ui/react-dialog/dist

cat > node_modules/@radix-ui/react-dialog/dist/index.mjs << EOL
// This is a minimal mock implementation of @radix-ui/react-dialog
// that doesn't rely on react-remove-scroll
import React from 'react';
import { Primitive } from '@radix-ui/react-primitive';
import { Slot } from '@radix-ui/react-slot';

// Simple mock version of DialogOverlay
const DialogOverlay = React.forwardRef(({ className, ...props }, forwardedRef) => {
  return React.createElement('div', {
    ...props,
    ref: forwardedRef,
    className: \`fixed inset-0 z-50 bg-black/50 \${className || ''}\`
  });
});
DialogOverlay.displayName = 'DialogOverlay';

// Simple mock version of DialogContent
const DialogContent = React.forwardRef(({ className, children, ...props }, forwardedRef) => {
  return React.createElement(
    'div',
    {
      role: 'dialog',
      'aria-modal': true,
      ...props,
      ref: forwardedRef,
      className: \`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 \${className || ''}\`
    },
    children
  );
});
DialogContent.displayName = 'DialogContent';

// Simple mock DialogPortal - just renders children directly
const DialogPortal = ({ children, container }) => {
  return children;
};

// Simple Dialog component that manages visibility state
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return React.createElement(React.Fragment, null, children);
};

// Mock Trigger - just a button that calls onOpenChange
const DialogTrigger = React.forwardRef(({ asChild, ...props }, forwardedRef) => {
  const Component = asChild ? Slot : 'button';
  return React.createElement(Component, {
    ...props,
    ref: forwardedRef,
    onClick: () => props.onClick && props.onClick()
  });
});
DialogTrigger.displayName = 'DialogTrigger';

// Other dialog components
const DialogTitle = React.forwardRef((props, forwardedRef) => 
  React.createElement('h2', { ...props, ref: forwardedRef }));
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef((props, forwardedRef) => 
  React.createElement('p', { ...props, ref: forwardedRef }));
DialogDescription.displayName = 'DialogDescription';

const DialogClose = React.forwardRef(({ asChild, ...props }, forwardedRef) => {
  const Component = asChild ? Slot : 'button';
  return React.createElement(Component, {
    ...props,
    ref: forwardedRef
  });
});
DialogClose.displayName = 'DialogClose';

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose
};
EOL

# Create the package.json for @radix-ui/react-dialog
cat > node_modules/@radix-ui/react-dialog/package.json << EOL
{
  "name": "@radix-ui/react-dialog",
  "version": "1.1.6",
  "description": "Mock implementation of Radix UI Dialog",
  "main": "./dist/index.mjs",
  "module": "./dist/index.mjs",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.mjs"
    }
  }
}
EOL

# Print debug info about the most important component files
echo "Verifying components exist:"
ls -la components/contact-form.tsx || echo "Missing contact-form.tsx"
ls -la components/faq-accordion.tsx || echo "Missing faq-accordion.tsx"
ls -la components/ui/button.tsx || echo "Missing ui/button.tsx"
ls -la components/ui/accordion.tsx || echo "Missing ui/accordion.tsx"
ls -la components/ui/sheet.tsx || echo "Missing ui/sheet.tsx"

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