"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  BrainCircuit, 
  ChevronDown, 
  MessageSquare, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Users 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";

// Dropdown animation variants
const dropdownVariants = {
  hidden: { opacity: 0, y: -5, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function SiteHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => {
    // Small delay before closing to make it more user-friendly
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Skip to content link for improved accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 p-2 bg-primary text-white z-50"
      >
        Skip to content
      </a>
      <motion.header
        className="sticky top-0 z-50 w-full border-b shadow-sm bg-background/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo / Branding */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="ElevateU Home"
              className="flex items-center gap-2 group"
            >
              <motion.div
                className="relative flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 overflow-hidden group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <BrainCircuit className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 border border-primary/20 rounded-full"></div>
              </motion.div>
              <div className="flex flex-col leading-tight">
                <span className="text-3xl font-bold text-primary">
                  ElevateU
                </span>
                <span className="text-[10px] uppercase text-muted-foreground tracking-wider">
                  AI Career Counselor
                </span>
              </div>
            </Link>
          </div>

          {/* Main Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary Navigation"
          >
            <Link
              href="/"
              className="inline-flex items-center h-16 text-sm font-medium transition-colors hover:text-primary hover:border-b-2 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Home
            </Link>

            <Link
              href="/features"
              className="inline-flex items-center h-16 text-sm font-medium transition-colors hover:text-primary hover:border-b-2 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Features
            </Link>

            <Link
              href="/success-stories"
              className="inline-flex items-center h-16 text-sm font-medium transition-colors hover:text-primary hover:border-b-2 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Success Stories
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center h-16 text-sm font-medium transition-colors hover:text-primary hover:border-b-2 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center h-16 text-sm font-medium transition-colors hover:text-primary hover:border-b-2 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Right-side Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              prefetch={true}
              className="hidden md:block text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Log In
            </Link>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/signup" prefetch={true}>Sign Up</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </motion.header>
    </>
  );
}
