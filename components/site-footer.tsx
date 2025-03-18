"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SiteFooter() {
  return (
    <footer role="contentinfo" className="mt-16">
      {/* Main Footer: Nav Columns + Contact */}
      <div className="bg-background border-t py-10 text-foreground relative z-10">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Explore */}
          <nav aria-label="Footer Navigation - Explore">
            <h3 className="mb-4 text-base font-semibold text-secondary tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/features/ai-career"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </nav>

          {/* Features */}
          <nav aria-label="Footer Navigation - Features">
            <h3 className="mb-4 text-base font-semibold text-secondary tracking-wide">
              Features
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/features/ai-career"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Career Counselor
                </Link>
              </li>
              <li>
                <Link
                  href="/features/ai-chatbot"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Chatbot Counselor
                </Link>
              </li>
              <li>
                <Link
                  href="/features/ai-mentorship"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Mentorship
                </Link>
              </li>
              <li>
                <Link
                  href="/features/personalized-study"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Personalized Study
                </Link>
              </li>
              <li>
                <Link
                  href="/features/smart-application-assist"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Smart Application Assist
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Footer Navigation - Resources">
            <h3 className="mb-4 text-base font-semibold text-secondary tracking-wide">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info + Social */}
          <div>
            <h3
              className="mb-4 text-base font-semibold text-secondary tracking-wide"
              itemProp="name"
            >
              Contact
            </h3>
            <address
              className="not-italic text-sm text-muted-foreground mb-4 leading-6"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <p itemProp="streetAddress">1209 North Orange Street</p>
              <p itemProp="addressLocality">Wilmington</p>
              <p itemProp="addressRegion">DE</p>
              <p itemProp="postalCode">19801</p>
              <p className="mt-2">
                <Link href="mailto:info@elevateu.com" itemProp="email">
                  info@elevateu.com
                </Link>
              </p>
              <p>
                <Link href="tel:+13025551234" itemProp="telephone">
                  (302) 555-1234
                </Link>
              </p>
            </address>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span itemProp="legalName">ElevateU</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
