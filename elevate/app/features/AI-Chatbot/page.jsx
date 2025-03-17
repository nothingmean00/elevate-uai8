"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; // optimized image loading
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/site-footer";
import { FAQAccordion } from "@/components/faq-accordion";
import { CaseStudiesCarousel } from "@/components/case-studies-carousel";

import {
  BrainCircuit,
  FileEdit,
  MessageSquare,
  Sparkles,
  UserPlus,
  CheckCircle2,
  Search,
  BookMarked,
  ArrowRight,
} from "lucide-react";

// ----------------------------------------------------------
// 1) FAQ SCHEMA FOR SMART APPLICATION ASSISTANT
// ----------------------------------------------------------
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the Smart Application Assistant work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You upload your application materials, including essays and interview recordings, and our AI provides immediate feedback on style, structure, clarity, and more."
      }
    },
    {
      "@type": "Question",
      name: "Can I use it for graduate school applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our AI can adapt to various levels of academic applications, from undergraduate to doctoral programs, offering tailored suggestions that fit your target school."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer interview practice too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We provide mock interview questions modeled on real admissions formats, along with feedback on tone, pacing, and clarity in your responses."
      }
    },
    {
      "@type": "Question",
      name: "Is there a limit on how many times I can revise my essays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We encourage iterative improvement. You can resubmit your essays multiple times and refine them until you feel confident in your final draft."
      }
    }
  ]
};

// ----------------------------------------------------------
// 2) CASE STUDIES DATA (FABRICATED EXAMPLES)
// ----------------------------------------------------------
const caseStudiesData = [
  {
    id: 1,
    name: "Gaining an Ivy League Edge",
    description:
      "Sarah leveraged the Smart Application Assistant to refine her personal statement and nail her interview responses...",
    excerpt: "Sarah’s Journey from Ordinary to Ivy League",
    image: "/smart-app-assistant-case1.jpg",
  },
  {
    id: 2,
    name: "Overcoming Writer’s Block",
    description:
      "Andrew struggled to showcase his unique background in his essays. Our system guided him through multiple drafts...",
    excerpt: "Andrew’s Creative Transformation",
    image: "/smart-app-assistant-case2.jpg",
  },
  {
    id: 3,
    name: "Mastering the Scholarship Essay",
    description:
      "Lisa needed funding to attend her dream university. With strategic feedback, she crafted an essay that won her a full scholarship...",
    excerpt: "Lisa’s Scholarship Success",
    image: "/smart-app-assistant-case3.jpg",
  },
  {
    id: 4,
    name: "International Applicant’s Triumph",
    description:
      "Rohan, an international student, adapted to U.S. admissions requirements quickly via specialized prompts and AI-driven feedback...",
    excerpt: "Rohan’s Global Advantage",
    image: "/smart-app-assistant-case4.jpg",
  },
  {
    id: 5,
    name: "Crushing the MBA Interview",
    description:
      "Marissa used our mock interview drills to conquer her nerves and highlight her leadership experience, earning multiple MBA admits...",
    excerpt: "Marissa’s Business School Breakthrough",
    image: "/smart-app-assistant-case5.jpg",
  },
];

// ----------------------------------------------------------
// 3) FEATURES FOR SMART APPLICATION ASSISTANT (BIG ICON BUTTONS)
// ----------------------------------------------------------
const assistantFeatures = [
  {
    label: "Essay Guidance",
    icon: <FileEdit className="h-8 w-8" />,
    description: "Immediate, data-backed suggestions for structure, tone, and clarity."
  },
  {
    label: "Mock Interview Drills",
    icon: <UserPlus className="h-8 w-8" />,
    description: "Practice with real-world questions and get instant AI feedback."
  },
  {
    label: "Real-Time Analytics",
    icon: <BrainCircuit className="h-8 w-8" />,
    description: "Leverage historical admissions data to strengthen each application round."
  },
  {
    label: "Scholarship Matching",
    icon: <BookMarked className="h-8 w-8" />,
    description: "Find scholarships aligned with your strengths, background, and goals."
  },
  {
    label: "Personal Branding Tips",
    icon: <Sparkles className="h-8 w-8" />,
    description: "Craft a unique narrative that resonates with admissions committees."
  },
  {
    label: "Holistic Application Support",
    icon: <CheckCircle2 className="h-8 w-8" />,
    description: "Guidance on extracurricular highlights, recommendation letters, and more."
  },
];

export default function SmartApplicationAssistantPage() {
  // Example parallax usage (optional)
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <>
      <Head>
        <title>Smart Application Assistant | ElevateU</title>
        <meta
          name="description"
          content="ElevateU’s advanced Smart Application Assistant provides AI-powered feedback on college application essays, personal statements, and interview responses. Benefit from real-time analytics, proven admissions data, and strategic recommendations to help you secure your ideal offer."
        />
        <meta
          name="keywords"
          content="Smart Application Assistant, AI college applications, essay feedback, interview prep, admissions strategy, scholarship matching"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Smart Application Assistant | ElevateU" />
        <meta
          property="og:description"
          content="Experience next-level admissions support. Our Smart Application Assistant refines your essays, interview skills, and overall application strategy using cutting-edge AI technology."
        />
        <meta property="og:image" content="/og-smart-app-assistant.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.elevateu.com/smart-application-assistant" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smart Application Assistant | ElevateU" />
        <meta
          name="twitter:description"
          content="ElevateU’s advanced Smart Application Assistant provides AI-powered feedback on your application materials, ensuring you put your best foot forward."
        />
        <meta name="twitter:image" content="/og-smart-app-assistant.jpg" />

        <link rel="canonical" href="https://www.elevateu.com/smart-application-assistant" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-muted">
        {/* Optional parallax element */}
        <motion.div
          style={{ y: yPos }}
          className="pointer-events-none absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-primary opacity-10 blur-3xl"
        />
        <div className="container relative z-10 py-24 md:py-32">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-secondary">
                Smart Application Assistant
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Take the guesswork out of your college or grad school applications.
                Our AI-driven platform delivers instant feedback on essays, personal statements,
                and interview responses—so you can submit confidently.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button variant="default" size="lg">
                  Try it Now
                </Button>
                <Button variant="outline" size="lg">
                  Explore More Services
                </Button>
              </div>
            </div>

            <motion.div
              className="bg-card p-6 md:p-8 rounded-lg border border-primary/20 shadow"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold text-secondary">
                  Instantly Elevate Your Application
                </h3>
              </div>
              <p className="text-sm mb-6 text-muted-foreground">
                Based on proven admissions data and AI-driven insights, we deliver precise feedback
                to help you stand out from the crowd.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Personalized essay improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Data-backed interview coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Scholarship &amp; program matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>360° application strategy</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </header>

      <main>
        {/* PERSONAL PATH SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container grid items-center gap-10 md:grid-cols-2">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/smart-app-hero.jpg"
                alt="Smart Application Assistant illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg border border-primary/10"
              />
            </motion.div>
            <div className="order-1 md:order-2 space-y-6">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-secondary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Your Personal Path to Acceptance
              </motion.h2>
              <motion.p
                className="text-muted-foreground md:text-lg max-w-2xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our assistant adapts to your goals—be it Ivy League, top MBA programs,
                or prestigious scholarships—offering focused feedback that improves with each revision.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button variant="default" asChild>
                  <Link href="#how-it-works">Learn How It Works</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="mx-auto mb-12 text-center max-w-2xl">
              <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary mb-4">
                Key Features
              </h3>
              <p className="text-muted-foreground md:text-lg">
                Our AI engine provides a full suite of tools for every admissions challenge.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {assistantFeatures.map(({ label, icon, description }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex flex-col gap-3 rounded-lg border border-primary/20 p-6 bg-white shadow-sm text-left hover:shadow-md transition-shadow"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                    <div className="text-primary group-hover:text-primary-foreground transition-colors">
                      {icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-secondary">{label}</h4>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-16 md:py-24 bg-white">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12 px-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Submitting your materials is effortless—simply upload, review AI feedback, and refine.
            </p>
          </motion.div>

          <div className="container grid gap-12 md:grid-cols-3 md:gap-16">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-secondary">1. Submit Your Draft</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Upload your essay or interview video. Our AI instantly scans for key improvements.
              </p>
            </motion.div>

            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                <BrainCircuit className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-secondary">2. Get AI Insights</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                We analyze your material against thousands of success stories to offer data-driven feedback.
              </p>
            </motion.div>

            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-secondary">3. Refine &amp; Re-submit</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Implement suggestions, polish your work, and re-check until you’re 100% confident.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PLAN FOR YOUR TARGET SCHOOLS */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container grid items-center gap-16 md:grid-cols-2">
            <motion.div
              className="bg-card p-8 rounded-2xl border border-primary/20 shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-6 text-secondary">
                Plan for Your Target Schools
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl">
                Whether your dream is Harvard, MIT, or a specialized graduate program, our platform
                highlights the unique qualities each admissions team looks for. Focus on what matters
                and avoid pitfalls that often go unnoticed.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>School-specific essay prompts &amp; guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Customized interview question banks</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Actionable plan for deadlines &amp; scholarship hunts</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/smart-app-tailored.jpg"
                alt="Target schools"
                width={600}
                height={400}
                className="rounded-lg shadow-lg border border-primary/10"
              />
            </motion.div>
          </div>
        </section>

        {/* ADDITIONAL TOOLS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="mx-auto mb-12 text-center max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
                Additional Tools
              </h2>
              <p className="text-muted-foreground md:text-lg mt-4">
                Explore even more ways we help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="border border-primary/20 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mb-4">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary">
                  Industry-Specific Opportunities
                </h3>
                <p className="text-sm text-muted-foreground">
                  Discover scholarships, hackathons, leadership programs, and more—constantly updated
                  for your evolving interests.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mb-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary">
                  24/7 Chat Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Got a burning question at midnight? Our chatbot counselor provides immediate
                  clarifications on internships, skill gaps, and more.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mb-4">
                  <FileEdit className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary">
                  Optimized Study Plans
                </h3>
                <p className="text-sm text-muted-foreground">
                  Keep your GPA strong while prepping for job interviews. We’ll sync your academic
                  and career calendars seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-secondary">
              Case Studies
            </h2>
            <CaseStudiesCarousel caseStudies={caseStudiesData} />
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <motion.div
              className="mx-auto mb-12 text-center max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
                Frequently Asked
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
                Smart Application Assistant FAQs
              </h2>
              <p className="mx-auto mt-4 text-muted-foreground md:text-lg">
                Find answers to common questions about refining your application materials,
                personalizing your interview prep, and boosting your admission odds.
              </p>
            </motion.div>
            <div className="mx-auto max-w-3xl">
              <FAQAccordion
                items={[
                  {
                    question: "How does the Smart Application Assistant work?",
                    answer:
                      "You upload your essays or interview recordings, and our AI analyzes them based on proven admissions data. You’ll receive immediate, actionable feedback to strengthen your application."
                  },
                  {
                    question: "Can I use it for graduate school applications?",
                    answer:
                      "Yes. The assistant supports undergrad, grad, and professional programs. It tailors recommendations to each program’s unique criteria and format."
                  },
                  {
                    question: "Do you offer interview practice too?",
                    answer:
                      "Absolutely. We provide practice sessions with real interview prompts and AI-driven feedback on clarity, confidence, and impact."
                  },
                  {
                    question: "Is there a limit on how many times I can revise my essays?",
                    answer:
                      "We encourage iterative improvement—no strict limits. You can refine your drafts as many times as you need for the best results."
                  }
                ]}
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="container py-16 md:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 text-secondary">
            Ready to Transform Your Application?
          </h2>
          <p className="text-muted-foreground md:text-lg mb-12 max-w-3xl mx-auto">
            Sign up to access our AI-driven platform and get the personalized feedback you need
            for every step of the admissions process. Don’t leave your future to chance—empower
            your application with data and expertise.
          </p>
          <Button size="lg" variant="default" asChild>
            <Link href="/get-started">Get Started with Smart Assistant</Link>
          </Button>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
