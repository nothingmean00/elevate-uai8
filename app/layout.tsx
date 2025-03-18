import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header"; // Updated: using named import
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import dynamic from "next/dynamic";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Dynamically import the footer to improve initial load performance
const SiteFooter = dynamic(() => import("@/components/site-footer"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "ElevateU | AI-Powered College & Career Counseling",
  description: "Transform your academic journey with AI-driven college counseling, unlimited SAT practice, and personalized career guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Add meta tags for better SEO and social sharing */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#5E3CB3" />
        <meta property="og:site_name" content="ElevateU" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <SiteHeader /> {/* This renders your header on every page */}
        <BreadcrumbNav /> {/* Breadcrumb navigation for better wayfinding */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
