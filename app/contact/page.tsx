"use client";

import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  // LocalBusiness structured data for SEO & local authority
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ElevateU",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1209 North Orange Street",
      addressLocality: "Wilmington",
      addressRegion: "DE",
      postalCode: "19801",
      addressCountry: "USA",
    },
    telephone: "(302) 555-1234",
    email: "info@elevateu.com",
    url: "https://www.elevateu.com/contact",
    image: "https://www.elevateu.com/path-to-image.jpg", // Replace with your actual image URL
    priceRange: "$$",
    openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
  };

  return (
    <>
      <Head>
        <title>Contact ElevateU | We're Here to Help</title>
        <meta
          name="description"
          content="Have questions about ElevateU's AI-driven college and career counseling? Reach out by phone, email, or our secure contact form. We're here to support you!"
        />
        <meta property="og:title" content="Contact ElevateU" />
        <meta
          property="og:description"
          content="Reach out to ElevateU for support, inquiries, and more."
        />
        <meta property="og:url" content="https://www.elevateu.com/contact" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>

      <main className="flex-1">
        <div className="container py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {/* Contact Info Section */}
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Contact Us
                </h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Have questions? Reach out to our friendly team via phone, email, or our secure contact form.
                </p>
              </div>
              <div className="grid gap-6">
                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <MapPin className="h-5 w-5" aria-label="Our Location" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <address className="not-italic text-muted-foreground">
                      <p>1209 North Orange Street</p>
                      <p>Wilmington, DE 19801</p>
                    </address>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Mail className="h-5 w-5" aria-label="Email Us" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-muted-foreground">
                      <Link href="mailto:info@elevateu.com" className="underline">
                        info@elevateu.com
                      </Link>
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Phone className="h-5 w-5" aria-label="Call Us" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-muted-foreground">
                      <Link href="tel:+13025551234" className="underline">
                        (302) 555-1234
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
