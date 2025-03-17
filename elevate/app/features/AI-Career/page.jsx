"use client";

import Head from "next/head";
import Link from "next/link"; // Added import for Link
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/site-footer";
import { FAQAccordion } from "@/components/faq-accordion";
import { CaseStudiesCarousel } from "@/components/case-studies-carousel";
import { AnimatedBackground } from "@/components/animated-background";

import {
  BrainCircuit,
  FileEdit,
  MessageSquare,
  Search,
  UserPlus,
  BookMarked,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Users,
  CheckCircle2,
  ClipboardList,
  BookOpen,
  Clock,
} from "lucide-react";

// Example FAQ schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does ElevateU's AI Career Roadmap work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We analyze your academic background, career interests, and professional goals, creating an adaptive roadmap that evolves as you do."
      }
    },
    {
      "@type": "Question",
      name: "Do you only cater to STEM majors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our roadmap supports all fields—business, arts, sciences, and more—offering personalized resources based on your targeted industry."
      }
    },
    {
      "@type": "Question",
      name: "What if my career goals change mid-way?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI automatically recalibrates your plan, highlighting updated milestones, relevant mentors, and essential skills for your new direction."
      }
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sign up, complete your profile, and let the AI do the rest. You’ll receive an adaptive roadmap with recommended steps, resources, and deadlines."
      }
    }
  ]
};

// Example features (6 big buttons)
const roadmapFeatures = [
  {
    label: "Mock Interviews & Preparation",
    icon: <CheckCircle2 className="h-8 w-8" />,
    description: "Sharpen your interview performance with real-time feedback and custom question sets."
  },
  {
    label: "Internship Guidance",
    icon: <GraduationCap className="h-8 w-8" />,
    description: "Find, apply, and secure top internship opportunities across multiple industries."
  },
  {
    label: "Networking Management",
    icon: <Users className="h-8 w-8" />,
    description: "Track mentors, peers, and professionals to build a thriving personal network."
  },
  {
    label: "Resume Creation",
    icon: <ClipboardList className="h-8 w-8" />,
    description: "Polish your unique story and highlight skills to stand out in competitive job markets."
  },
  {
    label: "Extracurriculars Guidance",
    icon: <Sparkles className="h-8 w-8" />,
    description: "Optimize projects, clubs, and volunteer work to build a compelling student portfolio."
  },
  {
    label: "Technicals & Software Prep",
    icon: <FileEdit className="h-8 w-8" />,
    description: "Stay ahead with in-demand programming, analytical, and productivity tools."
  },
];

// Example nine fabricated case studies
const caseStudiesData = [
  {
    id: 1,
    name: "Innovating in AI",
    description:
      "Steve built his AI portfolio with ElevateU’s guidance, securing a research internship at a top university...",
    excerpt: "Steve’s Path to Cutting-Edge Research",
    image: "/case-study-1.jpg",
  },
  {
    id: 2,
    name: "Transitioning from Arts to Tech",
    description:
      "Maria pivoted from a Fine Arts major to a UX design role at a leading startup, thanks to personalized skill roadmaps...",
    excerpt: "Maria’s Journey of Creative Transformation",
    image: "/case-study-2.jpg",
  },
  {
    id: 3,
    name: "From Community College to FinTech",
    description:
      "Jason leveraged ElevateU’s mentorship pairing and internship leads to break into the finance tech sector...",
    excerpt: "Jason’s Dream Job in FinTech",
    image: "/case-study-3.jpg",
  },
  {
    id: 4,
    name: "Building a Global Network",
    description:
      "Alyssa harnessed data-driven networking suggestions to connect with industry leaders around the world...",
    excerpt: "Alyssa’s International Networking Triumph",
    image: "/case-study-4.jpg",
  },
  {
    id: 5,
    name: "Landing a Creative Agency Internship",
    description:
      "Ben used ElevateU’s extracurriculars guidance to craft a compelling portfolio, catching the eye of top design firms...",
    excerpt: "Ben’s Visual Design Adventure",
    image: "/case-study-5.jpg",
  },
  {
    id: 6,
    name: "Engineering a Future at Tesla",
    description:
      "Ray combined coursework alignment with specialized projects, ultimately impressing recruiters at Tesla...",
    excerpt: "Ray’s High-Powered Engineering Road",
    image: "/case-study-6.jpg",
  },
  {
    id: 7,
    name: "Balancing Athletics & Academics",
    description:
      "Tina juggled varsity sports and tough coursework, using our AI schedule optimizer to secure a sports marketing role...",
    excerpt: "Tina’s Victory On and Off the Field",
    image: "/case-study-7.jpg",
  },
  {
    id: 8,
    name: "Cracking the Consulting Code",
    description:
      "Utilizing targeted mock interview drills and skill modules, Kevin landed an internship at a top consulting firm...",
    excerpt: "Kevin’s Strategy for Consulting Success",
    image: "/case-study-8.jpg",
  },
  {
    id: 9,
    name: "Elevating a Startup Pitch",
    description:
      "Donna fine-tuned her pitch deck and product ideas through mentorship, eventually attracting startup investors...",
    excerpt: "Donna’s Entrepreneurial Leap",
    image: "/case-study-9.jpg",
  },
];

export default function AICareerCollegeRoadmapPage() {
  // Parallax effect for dynamic header movement
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 600], [0, 200]);

  return (
    <>
      <Head>
        <title>AI Career Roadmap | ElevateU: Your Path to Industry Success</title>
        <meta
          name="description"
          content="ElevateU's advanced AI Roadmap helps college students build essential skills, find internships, and network effectively to land a dream career. Explore strategic interview prep, resume enhancements, and more."
        />
        <meta property="og:title" content="AI Career Roadmap | ElevateU" />
        <meta
          property="og:description"
          content="Take your college years to the next level with a personalized AI-driven career plan. ElevateU ensures every milestone leads you closer to your ideal role, be it in tech, finance, arts, or beyond."
        />
        <meta property="og:image" content="/og-ai-roadmap.jpg" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      {/* HERO SECTION */}
      <header className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="ElevateU AI-driven college readiness with unlimited SAT practice and tailored essay guidance"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5E3CB3]/20 to-[#5E3CB3]/5 dark:from-[#5E3CB3]/10 dark:to-[#5E3CB3]/5" />
        </div>
        <div className="container relative z-10 py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Left column: Headline, subheadline, benefits & CTAs */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-full border border-[#5E3CB3]/20 bg-[#5E3CB3]/10 px-3 py-1 text-sm text-[#5E3CB3] uppercase tracking-wide">
                AI-Powered Education
              </div>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-[#2A2D43]">
                ElevateU: Unlock Your Future with AI-Driven College &amp; Career Counseling
              </h1>
              {/* Trusted-by subheadline */}
              <p className="text-lg font-medium text-[#4A4A4A]">
                Trusted by 10,000+ Students Worldwide
              </p>
              <p className="max-w-[600px] text-[#4A4A4A] md:text-xl">
                Experience unlimited SAT practice, data‑driven university recommendations, and personalized essay guidance. Our AI combines expert mentorship with advanced analytics to guide you from high school to your dream career.
              </p>
              {/* Benefit bullets */}
              <ul className="mt-4 space-y-2 text-sm text-[#4A4A4A]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#5E3CB3]" />
                  <span>Personalized guidance tailored to your profile</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#5E3CB3]" />
                  <span>Data-backed university recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#5E3CB3]" />
                  <span>Unlimited practice & real-time feedback</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="lg" className="group" asChild>
                  <Link href="/signup" aria-label="Start Your Journey">
                    <>
                      Start Your Journey
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about" aria-label="Learn More About Us">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right column: Hero Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] animate-float">
                <Image
                  src="/images/hero-visual.jpg"
                  alt="Illustration of AI-driven college and career guidance"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MID-SCROLL CTA BANNER */}
      <section className="bg-[#5E3CB3] py-8">
        <div className="container text-center">
          <p className="mb-4 text-lg font-medium text-white">
            Ready to accelerate your career journey?
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/signup" aria-label="Get Started Now">
              Get Started Now
            </Link>
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE ELEVATEU */}
      <section className="bg-[#F4F4F7] py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 text-center md:mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2A2D43]">
              Why Choose ElevateU?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-[#4A4A4A] md:text-xl">
              Our AI-powered platform delivers tailored college and career counseling with features that empower you to master the SAT, craft standout essays, and discover the best-fit universities worldwide.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div className="flex flex-col items-center text-center group transition-transform hover:scale-105">
              <div className="mb-4 rounded-full bg-[#5E3CB3]/10 p-4 transition-all group-hover:bg-[#5E3CB3] group-hover:text-white">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2A2D43]">Personalized AI Guidance</h3>
              <p className="text-[#4A4A4A]">
                Get custom college and career roadmaps designed for your unique strengths, SAT goals, and application needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group transition-transform hover:scale-105">
              <div className="mb-4 rounded-full bg-[#5E3CB3]/10 p-4 transition-all group-hover:bg-[#5E3CB3] group-hover:text-white">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2A2D43]">Unlimited SAT Practice</h3>
              <p className="text-[#4A4A4A]">
                Access endless, AI-generated SAT questions that pinpoint and improve your weaknesses—anytime, anywhere.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group transition-transform hover:scale-105">
              <div className="mb-4 rounded-full bg-[#5E3CB3]/10 p-4 transition-all group-hover:bg-[#5E3CB3] group-hover:text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2A2D43]">Tailored Essay Guidance</h3>
              <p className="text-[#4A4A4A]">
                Leverage our AI to craft compelling essays that speak directly to the admissions criteria of top universities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="container py-16 md:py-20">
        <motion.div
          id="how-it-works"
          className="grid gap-12 md:grid-cols-2 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#5E3CB3]/10 mb-6">
              <BrainCircuit className="h-6 w-6 text-[#5E3CB3]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#2A2D43]">
              How the AI Roadmap Guides You
            </h2>
            <p className="text-[#4A4A4A] mb-6">
              We thoroughly evaluate your academic background, career ambitions, and current skill level to produce a dynamic roadmap that evolves with you. Whether it’s an upcoming networking event, specialized workshop, or application deadline, our AI ensures you stay on track.
            </p>
            <ul className="space-y-2 mb-8 text-[#4A4A4A]">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-[#5E3CB3] mt-0.5 flex-shrink-0" />
                <span>Adaptive approach shaped by real-time progress</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-[#5E3CB3] mt-0.5 flex-shrink-0" />
                <span>Dynamic updates as your interests evolve</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-[#5E3CB3] mt-0.5 flex-shrink-0" />
                <span>Seamless integration of mentorship and scholarship details</span>
              </li>
            </ul>
          </div>
          <motion.div
            className="bg-[#F4F4F7] rounded-lg p-8 border border-[#5E3CB3]/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Animated demo overlay */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#5E3CB3]/20 animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-1/2 bg-[#5E3CB3]/20 rounded animate-pulse"></div>
                  <div className="h-3 w-3/4 bg-[#5E3CB3]/10 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#5E3CB3]/20 animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-2/3 bg-[#5E3CB3]/20 rounded animate-pulse"></div>
                  <div className="h-3 w-3/4 bg-[#5E3CB3]/10 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#5E3CB3]/20 animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-1/2 bg-[#5E3CB3]/20 rounded animate-pulse"></div>
                  <div className="h-3 w-3/4 bg-[#5E3CB3]/10 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Plan for Your Future Firm */}
      <section className="container py-16 md:py-20">
        <motion.div
          className="grid gap-12 md:grid-cols-2 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="order-2 md:order-1 bg-[#F4F4F7] rounded-lg p-8 border border-[#5E3CB3]/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Demo overlay or video snippet */}
            <div className="space-y-4">
              <div className="h-32 w-full bg-[#5E3CB3]/10 rounded-lg flex items-center justify-center">
                <span className="text-[#2A2D43] font-medium">Watch Demo</span>
              </div>
              <div className="h-4 w-3/4 bg-[#5E3CB3]/20 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-[#5E3CB3]/20 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-[#5E3CB3]/20 rounded animate-pulse"></div>
            </div>
          </motion.div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#5E3CB3]/10 mb-6">
              <FileEdit className="h-6 w-6 text-[#5E3CB3]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#2A2D43]">
              Plan for Your Future Firm
            </h2>
            <p className="text-[#4A4A4A] mb-6">
              Whether aiming for a large tech corporation, a premier finance powerhouse, or a creative agency, our AI pinpoints the experience, coursework, and networking strategies that truly matter to recruiters.
            </p>
            <ul className="space-y-2 text-[#4A4A4A]">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-[#5E3CB3] mt-0.5" />
                <span>Targeted industry events and specialized meetups</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-[#5E3CB3] mt-0.5" />
                <span>Time-bound skill milestones &amp; portfolio development tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-[#5E3CB3] mt-0.5" />
                <span>Detailed roadmap for internship, job search, and career advancement</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Mentorship & Networking */}
      <section className="container py-16 md:py-20">
        <motion.div
          className="grid gap-12 md:grid-cols-2 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#5E3CB3]/10 mb-6">
              <UserPlus className="h-6 w-6 text-[#5E3CB3]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#2A2D43]">
              Mentorship &amp; Networking
            </h2>
            <p className="text-[#4A4A4A] mb-6">
              Connect with industry pros who provide personalized feedback, open doors to new opportunities, and help build meaningful relationships. Our platform matches you with mentors aligned with your goals.
            </p>
            <ul className="space-y-2 text-[#4A4A4A]">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-[#5E3CB3] mt-0.5" />
                <span>1:1 mentorship sessions tailored to your career path</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-[#5E3CB3] mt-0.5" />
                <span>Virtual meetups, live Q&amp;As, and specialized webinars</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-[#5E3CB3] mt-0.5" />
                <span>Robust network management tools for follow-ups and relationship building</span>
              </li>
            </ul>
          </div>
          <motion.div
            className="bg-[#F4F4F7] rounded-lg p-8 border border-[#5E3CB3]/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Animated demo overlay */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#5E3CB3]/20 animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-1/2 bg-[#5E3CB3]/20 rounded animate-pulse"></div>
                  <div className="h-3 w-3/4 bg-[#5E3CB3]/10 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#5E3CB3]/20 animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-2/3 bg-[#5E3CB3]/20 rounded animate-pulse"></div>
                  <div className="h-3 w-3/4 bg-[#5E3CB3]/10 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#5E3CB3]/20 animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-1/2 bg-[#5E3CB3]/20 rounded animate-pulse"></div>
                  <div className="h-3 w-3/4 bg-[#5E3CB3]/10 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Additional Tools Section */}
      <section className="container py-16 md:py-20">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border border-[#5E3CB3]/20 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#5E3CB3]/10 mb-4">
              <Search className="h-5 w-5 text-[#5E3CB3]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#2A2D43]">Industry-Specific Opportunities</h3>
            <p className="text-[#4A4A4A]">
              Discover scholarships, hackathons, leadership programs, and more—constantly updated for your evolving interests.
            </p>
          </div>
          <div className="border border-[#5E3CB3]/20 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#5E3CB3]/10 mb-4">
              <MessageSquare className="h-5 w-5 text-[#5E3CB3]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#2A2D43]">24/7 Chat Support</h3>
            <p className="text-[#4A4A4A]">
              Got a burning question at midnight? Our chatbot counselor provides immediate clarifications on internships, skill gaps, and more.
            </p>
          </div>
          <div className="border border-[#5E3CB3]/20 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#5E3CB3]/10 mb-4">
              <BookMarked className="h-5 w-5 text-[#5E3CB3]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#2A2D43]">Optimized Study Plans</h3>
            <p className="text-[#4A4A4A]">
              Keep your GPA strong while prepping for job interviews. We’ll sync your academic and career calendars seamlessly.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="py-16 md:py-24 bg-[#F4F4F7]">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-[#2A2D43]">
            Case Studies
          </h2>
          <CaseStudiesCarousel caseStudies={caseStudiesData} />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="mx-auto mb-12 text-center max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full border border-[#5E3CB3]/20 bg-[#5E3CB3]/10 px-3 py-1 text-sm text-[#5E3CB3] mb-4">
              Frequently Asked
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2A2D43]">
              AI Roadmap FAQs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#4A4A4A] md:text-lg">
              Everything you need to know about how our AI guides your career planning and helps ensure success post-graduation.
            </p>
          </motion.div>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion
              items={[
                {
                  question: "How does ElevateU's AI Career Roadmap work?",
                  answer:
                    "We analyze your academic background, career interests, and professional goals, creating an adaptive roadmap that evolves as you do..."
                },
                {
                  question: "Do you only cater to STEM majors?",
                  answer:
                    "No. Our approach covers all fields—business, arts, sciences, etc.—offering personalized modules, networking ideas, and internship leads relevant to any specialty."
                },
                {
                  question: "What if my career goals change mid-way?",
                  answer:
                    "Our AI automatically recalibrates your plan, highlighting new milestones, mentors, and skills aligned with your updated ambitions."
                },
                {
                  question: "How do I get started?",
                  answer:
                    "Sign up, fill in your profile details, and let the AI take it from there. You’ll receive a dynamic roadmap with recommended steps, resources, and deadlines."
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-[#5E3CB3] py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Elevate Your Future?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90 text-lg">
            Take the next step toward a successful career with our personalized AI roadmap. Schedule your consultation today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup" aria-label="Schedule Consultation">
              Schedule Consultation
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
