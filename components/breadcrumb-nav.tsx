"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href: string;
};

// Map path segments to readable names
const pathMap: Record<string, string> = {
  "features": "Features",
  "AI-Career": "AI Career Counselor",
  "AI-Chatbot": "AI Chatbot",
  "AI-Mentorship": "AI Mentorship",
  "Personalized-Study": "Personalized Study",
  "Smart-Application-Assist": "Smart Application Assist",
  "success-stories": "Success Stories",
  "pricing": "Pricing",
  "contact": "Contact",
  "signup": "Sign Up",
  "login": "Log In",
};

export function BreadcrumbNav() {
  const pathname = usePathname();
  
  // Skip on homepage
  if (pathname === "/") return null;
  
  // Build breadcrumb items from the current path
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" }
  ];
  
  // Add path segments
  let currentPath = "";
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      label: pathMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: currentPath
    });
  });
  
  // Only show breadcrumbs if we have more than just "Home"
  if (breadcrumbs.length <= 1) return null;
  
  return (
    <nav aria-label="Breadcrumb" className="py-2 px-4 bg-white/80 backdrop-blur-sm border-b">
      <ol className="container flex items-center space-x-1 text-sm md:space-x-2 text-muted-foreground">
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          
          return (
            <li key={idx} className="flex items-center">
              {idx > 0 && <ChevronRight className="mx-1 h-4 w-4 opacity-50" />}
              
              {isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link 
                  href={crumb.href}
                  className="hover:text-primary transition-colors flex items-center"
                >
                  {idx === 0 ? (
                    <>
                      <Home className="h-4 w-4 mr-1" />
                      <span className="sr-only">Home</span>
                    </>
                  ) : (
                    crumb.label
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
} 