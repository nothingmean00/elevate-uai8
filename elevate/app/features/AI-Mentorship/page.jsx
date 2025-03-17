"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/site-footer";
import { FAQAccordion } from "@/components/faq-accordion";
import { CaseStudiesCarousel } from "@/components/case-studies-carousel"; // or your relevant import if you have a special mentorship carousel

// Lucide Icons (adjust as desired)
import {
  UserPlus,
  Users,
  MessageSquare,
  Sparkles,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Network,
  BookMarked,
} from "lucide-react";

// -------------------------------
// 1) FAQ SCHEMA FOR MENTORSHIP
// -------------------------------
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the AI Mentorship Match work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI engine analyzes your academic interests, career goals, and personality traits, pairing you with a mentor whose background and expertise align perfectly with your journey."
      }
    },
    {
      "@type": "Question",
      "name": "Are mentors exclusively from NYU?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While many mentors are NYU alumni, our network extends globally across various universities and industries to ensure the best possible match for each student."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be in the same city or country as my mentor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all. Our platform facilitates virtual meetings, so you can connect and collaborate with mentors from anywhere in the world."
      }
    },
    {
      "@type": "Question",
      "name": "How often can I meet with my mentor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Scheduling is flexible. You and your mentor can decide on meeting frequency—weekly, monthly, or as needed—through our built-in calendar and video conferencing tools."
      }
    },
    {
      "@type": "Question",
      "name": "Can mentors help with college essays and internships?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our mentors provide insights on essay writing, interview practice, and networking tips, and may guide you toward internships or other enrichment opportunities."
      }
    }
  ]
};

// -------------------------------
// 2) OPTIONAL CASE STUDIES DATA
// -------------------------------
const caseStudiesData = [
  {
    id: 1,
    name: "Securing a UX Internship",
    description:
      "Hannah, an aspiring designer, was matched with a seasoned UX expert from NYU. She fine-tuned her portfolio and landed a summer internship at a leading tech firm...",
    excerpt: "Hannah’s Design Breakthrough",
    image: "/ai-mentorship-1.jpg",
  },
  {
    id: 2,
    name: "From High School to Harvard",
    description:
      "Jason, a high school junior aiming for Ivy League schools, received step-by-step essay advice and career insights from a Harvard grad mentor...",
    excerpt: "Jason’s Path to the Ivy League",
    image: "/ai-mentorship-2.jpg",
  },
  {
    id: 3,
    name: "Launching a Startup",
    description:
      "Amanda leveraged her mentor’s experience to refine her pitch deck, connect with seed investors, and ultimately launch her own ecommerce startup...",
    excerpt: "Amanda’s Entrepreneurial Success",
    image: "/ai-mentorship-3.jpg",
  },
];

// -------------------------------
// 3) FEATURES FOR AI MENTORSHIP
// -------------------------------
const mentorshipFeatures = [
  {
    label: "Instant AI Matching",
    icon: <UserPlus className="h-8 w-8" />,
    description: "Connect with the perfect mentor based on your goals, major, and extracurricular interests."
  },
  {
    label: "Global Network",
    icon: <Users className="h-8 w-8" />,
    description: "Access mentors from diverse industries and backgrounds—beyond just one university or location."
  },
  {
    label: "24/7 Chat & Scheduling",
    icon: <MessageSquare className="h-8 w-8" />,
    description: "Flexible communication options, live chat support, and an integrated calendar to coordinate sessions."
  },
  {
    label: "Personalized Goal Tracking",
    icon: <Sparkles className="h-8 w-8" />,
    description: "Set clear objectives, deadlines, and milestones alongside your mentor for consistent progress."
  },
  {
    label: "Expert Career Insights",
    icon: <Lightbulb className="h-8 w-8" />,
    description: "Learn industry secrets, secure internships, and land job offers with exclusive mentor guidance."
  },
  {
    label: "Long-Term Relationship Management",
    icon: <Network className="h-8 w-8" />,
    description: "Stay connected over the long haul with advanced tools for nurturing and expanding your professional circle."
  },
];

export default function AIMentorshipMatchPage() {
  // Example parallax usage (optional)
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <>
      <Head>
        <title>AI Mentorship Match | ElevateU</title>
        <meta
          name="description"
          content="Connect with personalized mentors through ElevateU’s AI Mentorship Match. Our advanced algorithm pairs you with alumni and industry professionals for tailored guidance, networking, and career insights."
        />
        <meta
          name="keywords"
          content="AI Mentorship Match, mentor matching, NYU alumni, career mentorship, college counseling, personalized mentor, industry professionals"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook Meta */}
        <meta property="og:title" content="AI Mentorship Match | ElevateU" />
        <meta
          property="og:description"
          content="Get matched with experienced mentors who share your interests and career goals. Enjoy virtual scheduling, relationship management, and personalized guidance from industry experts."
        />
        <meta property="og:image" content="/og-ai-mentorship-match.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.elevateu.com/ai-mentorship-match" />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Mentorship Match | ElevateU" />
        <meta
          name="twitter:description"
          content="Connect with mentors who share your interests and career goals—ElevateU's AI ensures you find the perfect mentorship to supercharge your journey."
        />
        <meta name="twitter:image" content="/og-ai-mentorship-match.jpg" />

        <link rel="canonical" href="https://www.elevateu.com/ai-mentorship-match" />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Additional “Service” Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Mentorship Match",
              "description":
                "Personalized mentor matching powered by AI. Connect with alumni and industry professionals based on your goals, interests, and background.",
              "url": "https://www.elevateu.com/ai-mentorship-match",
            }),
          }}
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
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                AI Mentorship Match
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-secondary">
                Find Your Perfect Mentor
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Connect with mentors who share your academic interests, career goals, and background. 
                Our AI-powered algorithm pairs you with alumni and industry experts for tailored guidance, 
                networking opportunities, and insider knowledge in your desired field.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="lg" variant="default" asChild>
                  <Link href="/get-started">Connect with a Mentor</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <motion.div
              className="relative w-full h-[300px] md:h-[450px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/ai-mentorship-hero.jpg"
                alt="Mentorship platform illustration"
                fill
                className="object-cover rounded-lg border border-primary/10 shadow"
                priority
              />
            </motion.div>
          </div>
        </div>
      </header>

      <main>
        {/* WHY AI-POWERED MENTORSHIP? */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="mx-auto mb-12 text-center max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
                Why AI-Powered Mentorship?
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Traditional mentorship can be hit-or-miss. Our AI-driven approach analyzes 
                your academic background, extracurriculars, and aspirations to find mentors who 
                genuinely understand your journey.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Personalized Matching
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our AI sifts through thousands of mentor profiles to pair you with the right
                  guide—someone whose experience and goals align with yours.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Expert Insights
                </h3>
                <p className="text-sm text-muted-foreground">
                  Mentors offer tips on everything from acing college essays to thriving 
                  in competitive industries—letting you learn from their real-world wins.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Future-Ready Guidance
                </h3>
                <p className="text-sm text-muted-foreground">
                  Whether you’re exploring majors or seeking an internship, mentors provide clarity 
                  on next steps—ensuring you’re always moving toward your ideal career.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES (icon grid) */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="mx-auto text-center max-w-2xl mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
                Key Features
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Our AI Mentorship Match is packed with tools to ensure you get the most out 
                of every mentor relationship.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {mentorshipFeatures.map(({ label, icon, description }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group flex flex-col gap-3 
                    rounded-lg border border-primary/20 p-6 
                    bg-white shadow-sm text-left 
                    hover:shadow-md transition-shadow
                  "
                >
                  {/* Icon circle */}
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
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Getting started is simple—create your profile, get matched, and start collaborating.
              </p>
            </motion.div>
            <div className="grid gap-12 md:grid-cols-3 md:gap-16">
              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-secondary">1. Create Your Profile</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Provide information about your academic history, clubs, hobbies, and career ambitions.
                </p>
              </motion.div>
              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-secondary">2. Get Matched Instantly</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Our AI pairs you with mentors whose experience best fits your needs—no guesswork required.
                </p>
              </motion.div>
              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-secondary">3. Collaborate & Grow</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Schedule virtual meetings, set goals, and track your progress to maximize every mentorship session.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-secondary">
              Success Stories
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto md:text-lg">
              Explore real-life journeys of students who found their perfect mentor and unlocked new academic and career opportunities.
            </p>
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
                AI Mentorship FAQs
              </h2>
              <p className="mx-auto mt-4 text-muted-foreground md:text-lg">
                Answers to the most common questions about how our AI Mentorship Match connects you with expert guidance.
              </p>
            </motion.div>
            <div className="mx-auto max-w-3xl">
              <FAQAccordion
                items={[
                  {
                    question: "How does the AI Mentorship Match work?",
                    answer:
                      "Our AI engine analyzes your academic interests, career goals, and personality traits, pairing you with a mentor whose background and expertise align perfectly with your journey."
                  },
                  {
                    question: "Are mentors exclusively from NYU?",
                    answer:
                      "While many mentors are NYU alumni, our network extends globally across various universities and industries to ensure the best possible match for each student."
                  },
                  {
                    question: "Do I need to be in the same city or country as my mentor?",
                    answer:
                      "Not at all. Our platform facilitates virtual meetings, so you can connect and collaborate with mentors from anywhere in the world."
                  },
                  {
                    question: "How often can I meet with my mentor?",
                    answer:
                      "Scheduling is flexible. You and your mentor can decide on meeting frequency—weekly, monthly, or as needed—through our built-in calendar and video conferencing tools."
                  },
                  {
                    question: "Can mentors help with college essays and internships?",
                    answer:
                      "Absolutely. Our mentors provide insights on essay writing, interview practice, and networking tips, and may guide you toward internships or other enrichment opportunities."
                  }
                ]}
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="container py-16 md:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 text-secondary">
            Ready to Transform Your Future?
          </h2>
          <p className="text-muted-foreground md:text-lg mb-12 max-w-3xl mx-auto">
            Take advantage of our AI Mentorship Match to receive personalized guidance and expand your professional network.
            Don’t let uncertainty hold you back—connect with industry experts who’ve walked the path you’re headed down.
          </p>
          <Button size="lg" variant="default" asChild>
            <Link href="/get-started">Start Your Mentorship Journey</Link>
          </Button>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
