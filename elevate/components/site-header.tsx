"use client";

import Link from "next/link";
import { BrainCircuit, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";

// Dropdown animation variants
const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export function SiteHeader() {
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
            className="hidden md:flex items-center gap-6"
            aria-label="Primary Navigation"
          >
            <Link
              href="/"
              className="inline-flex items-center h-16 text-sm font-medium transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center h-16 text-sm font-medium transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              About
            </Link>

            {/* Features dropdown */}
            <motion.div
              className="relative group inline-flex items-center h-16"
              aria-haspopup="true"
            >
              <span
                className="cursor-pointer text-sm font-medium transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                tabIndex={0}
              >
                Features
              </span>
              <motion.div
                className="absolute left-0 top-full mt-1 z-50 w-56 bg-white shadow-lg rounded-md"
                variants={dropdownVariants}
                initial="hidden"
                whileHover="visible"
                whileFocus="visible"
                transition={{ duration: 0.2 }}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/features/AI-Career"
                      className="block px-4 py-2 transition-colors hover:bg-primary/10 focus:bg-primary/10"
                    >
                      AI Career Counselor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features/AI-Chatbot"
                      className="block px-4 py-2 transition-colors hover:bg-primary/10 focus:bg-primary/10"
                    >
                      AI Chatbot Counselor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features/AI-Mentorship"
                      className="block px-4 py-2 transition-colors hover:bg-primary/10 focus:bg-primary/10"
                    >
                      AI Mentorship
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features/Personalized-Study"
                      className="block px-4 py-2 transition-colors hover:bg-primary/10 focus:bg-primary/10"
                    >
                      Personalized Study
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features/Scholarship-Finder"
                      className="block px-4 py-2 transition-colors hover:bg-primary/10 focus:bg-primary/10"
                    >
                      Scholarship Finder
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features/Smart-Application-Assist"
                      className="block px-4 py-2 transition-colors hover:bg-primary/10 focus:bg-primary/10"
                    >
                      Smart Application Assist
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <Link
              href="/success-stories"
              className="inline-flex items-center h-16 text-sm font-medium transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Success Stories
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center h-16 text-sm font-medium transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center h-16 text-sm font-medium transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Right-side Buttons, Search, and Theme Toggle */}
          <div className="flex items-center gap-4">
            {/* Optional search icon linking to a dedicated search page */}
            <Link
              href="/search"
              aria-label="Search"
              className="hidden md:inline-flex p-2 rounded-full transition-colors hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <Search className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <ThemeToggle />
            <Link
              href="/login"
              className="hidden md:block text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Log In
            </Link>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </motion.header>
    </>
  );
}
