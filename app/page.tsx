"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Users,
  FileEdit,
  Search,
  GraduationCap,
} from "lucide-react";

// Lazy load heavy components
const TestimonialRotator = dynamic(() => import("@/components/testimonial-rotator"), {
  loading: () => <div className="h-80 w-full bg-gray-100 animate-pulse rounded-md"></div>
});
const AnimatedBackground = dynamic(() => import("@/components/animated-background").then(mod => mod.AnimatedBackground), { 
  ssr: false
});
const HowElevateUWorks = dynamic(() => import("@/components/how-elevateU-works"));
const FeaturesAccordion = dynamic(() => import("@/components/features-accordion").then(mod => mod.FeaturesAccordion));

// JSON-LD schemas for FAQs and Organization
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does ElevateU's AI counseling work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ElevateU uses advanced artificial intelligence to analyze your academic history, interests, strengths, and goals. Our AI creates personalized recommendations for colleges, majors, and career paths while continuously learning as you use the platform."
      }
    },
    {
      "@type": "Question",
      "name": "Can ElevateU help with scholarship applications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our AI Scholarship Finder scans thousands of opportunities and matches you with those aligned to your profile, while providing guidance on application materials and deadlines."
      }
    },
    {
      "@type": "Question",
      "name": "What makes ElevateU different from traditional counselors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide 24/7 AI-driven support alongside real-world mentors from top universities. Our approach combines efficiency and personalization to deliver comprehensive college and career planning."
      }
    },
    {
      "@type": "Question",
      "name": "What about data privacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We take data security seriously. ElevateU uses industry-standard encryption and strict privacy protocols to ensure your personal information remains protected."
      }
    },
    {
      "@type": "Question",
      "name": "How much does ElevateU cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer multiple subscription tiers—from a free trial with basic features to premium plans with individualized mentorship, ensuring there's an option for every budget."
      }
    }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ElevateU",
  "url": "https://www.elevateu.com",
  "logo": "https://www.elevateu.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/elevateu",
    "https://twitter.com/elevateu",
    "https://www.linkedin.com/company/elevateu"
  ]
};

// Sample success stories for the testimonial rotator.
const successStories = [
  {
    id: 1,
    name: "Alex's Journey",
    description:
      "ElevateU helped Alex improve his SAT score by 200 points and secure admission to UC Berkeley. The personalized coaching transformed his application.",
    excerpt: "A total game changer in test prep and college counseling.",
    image: ""
  },
  {
    id: 2,
    name: "Maria's Transformation",
    description:
      "Maria's dream of a full scholarship at Stanford became a reality thanks to ElevateU's tailored roadmap and mentorship.",
    excerpt: "Her future was completely reimagined with our guidance.",
    image: ""
  },
  {
    id: 3,
    name: "Victor's Success",
    description:
      "Victor's application stood out after he used ElevateU's essay guidance, resulting in multiple admission offers from top universities.",
    excerpt: "A standout application that opened many doors.",
    image: ""
  },
];

/* FadeInSection Component: Fades and slides in content when scrolled into view */
function FadeInSection({ children }: { children: React.ReactNode }) {
  const domRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMediaChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      // Skip animation for users who prefer reduced motion
      setVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  // If user prefers reduced motion, don't apply transitions
  const classes = prefersReducedMotion 
    ? "opacity-100"
    : `transition-all duration-700 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`;

  return (
    <div
      ref={domRef}
      className={classes}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>ElevateU: AI College Counseling, Unlimited SAT Prep &amp; Personalized University Admissions Guidance</title>
        <meta
          name="description"
          content="ElevateU is your global AI-driven college readiness software offering unlimited SAT practice, tailored essay guidance, and data-driven university recommendations. Transform your future with AI-powered college and career counseling."
        />
        <meta
          name="keywords"
          content="AI college counseling, unlimited SAT prep, college readiness, personalized essay guidance, university recommendations, SAT unlimited questions, AI college admissions"
        />
        <meta
          property="og:title"
          content="ElevateU: AI College Counseling, Unlimited SAT Prep &amp; Personalized University Admissions Guidance"
        />
        <meta
          property="og:description"
          content="Join thousands of students worldwide who leverage ElevateU's advanced AI for unlimited SAT practice, personalized essay writing, and data-driven college recommendations."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>

      {/* HERO SECTION */}
      <FadeInSection>
        <header className="relative overflow-hidden bg-white">
          <AnimatedBackground />
          <div className="container relative z-10 py-24 md:py-32">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center rounded-full border border-[#5E3CB3]/20 bg-[#5E3CB3]/10 px-4 py-1 text-sm text-[#5E3CB3] uppercase tracking-wide">
                  AI-Powered Education
                </div>
                <h1 className="text-4xl font-bold tracking-tighter leading-tight sm:text-5xl md:text-6xl text-[#2A2D43]">
                  ElevateU: Unlock Your Future with AI-Driven College &amp; Career Counseling
                </h1>
                <p className="max-w-lg text-lg text-[#4A4A4A]">
                  Experience unlimited SAT practice, data‑driven university recommendations, and personalized essay guidance. Our AI combines expert mentorship with advanced analytics to guide you from high school to your dream career.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="gap-1.5 transition-colors duration-200 bg-[#5E3CB3] hover:bg-[#4D2D9B] text-white"
                    asChild
                  >
                    <Link href="/signup" prefetch={true}>
                      <>
                        Start Your Journey
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-80 w-full md:h-96 md:w-full rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/images/shutterstock_1806905134-1080x675.png"
                    alt="ElevateU - College and Career Counseling"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </FadeInSection>

      {/* WHY CHOOSE ELEVATEU? SECTION */}
      <FadeInSection>
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-[#2A2D43]">Why Choose ElevateU?</h2>
              <p className="mt-2 max-w-xl mx-auto text-lg text-[#4A4A4A]">
                We combine cutting-edge AI with real mentorship to give you a competitive edge.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "AI-Driven Roadmaps",
                  desc: "Receive a customized plan based on your interests, strengths, and goals.",
                  icon: <BookOpen className="h-12 w-12 text-[#5E3CB3]" />
                },
                {
                  title: "Unlimited SAT Practice",
                  desc: "Practice endlessly with adaptive AI-generated SAT questions.",
                  icon: <Clock className="h-12 w-12 text-[#5E3CB3]" />
                },
                {
                  title: "Tailored Essay Guidance",
                  desc: "Craft compelling narratives to stand out in college applications.",
                  icon: <Users className="h-12 w-12 text-[#5E3CB3]" />
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-[#2A2D43] text-center mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-center">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ADVANCED FEATURES - Accordion */}
      <FadeInSection>
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter text-[#2A2D43]">Advanced Features</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-[#4A4A4A]">
                Discover our cutting-edge tools that give you a competitive edge—from endless SAT questions to dynamic essay guidance.
              </p>
            </div>
            <FeaturesAccordion />
          </div>
        </section>
      </FadeInSection>

      {/* HOW ELEVATEU WORKS SECTION (New Design with Improved UX) */}
      <FadeInSection>
        <HowElevateUWorks />
      </FadeInSection>

      {/* INSPIRING SUCCESS STORIES SECTION */}
      <FadeInSection>
        <section className="py-16 md:py-24 bg-[#F4F4F7]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2A2D43]">
                Inspiring Success Stories in AI College Counseling
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-[#4A4A4A]">
                Explore real-life accounts of students who leveraged our AI‑driven platform to achieve impressive results and secure admissions to their dream universities.
              </p>
            </div>
            <div className="mt-12">
              <TestimonialRotator caseStudies={successStories} />
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
