"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/site-footer";
import { FAQAccordion } from "@/components/faq-accordion";
import { CaseStudiesCarousel } from "@/components/case-studies-carousel";

// Lucide Icons
import {
  Clock,
  BookOpen,
  CheckCircle2,
  BrainCircuit,
  Sparkles,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

// ----------------------------------------------------------
// 1) FAQ SCHEMA FOR SEO
// ----------------------------------------------------------
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How are these study plans personalized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI evaluates your schedule, academic goals, and learning preferences to customize lesson formats, difficulty levels, and practice intervals. This ensures a highly efficient, personalized experience."
      }
    },
    {
      "@type": "Question",
      name: "Do I need to update the system if my schedule changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. You can log changes in your availability, upcoming exams, or new subjects, and the platform will automatically adjust your study blocks and resource recommendations."
      }
    },
    {
      "@type": "Question",
      name: "What kind of resources does the AI provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a curated mix—videos, quizzes, flashcards, and reading materials—tailored to your unique learning style and current knowledge gaps."
      }
    },
    {
      "@type": "Question",
      name: "Is there a limit to how many subjects I can include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our system can handle multiple subjects simultaneously, adapting your schedule and resources to ensure balanced progress across all areas you choose."
      }
    },
    {
      "@type": "Question",
      name: "How quickly can I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most users report improved retention and better time management within a few weeks of consistent use. Longer-term benefits, like grade improvements, typically become evident over an academic term."
      }
    }
  ]
};

// ----------------------------------------------------------
// 2) CASE STUDIES DATA (Sample / Fabricated)
// ----------------------------------------------------------
const caseStudiesData = [
  {
    id: 1,
    name: "Boosting Math Scores",
    description:
      "Elena followed her AI-driven plan with daily 20-minute practice sessions. Over two months, she saw her math test scores rise by 15 points.",
    excerpt: "Elena’s Path to Math Mastery",
    image: "/study-plan-case1.jpg",
  },
  {
    id: 2,
    name: "Acing Multiple Subjects",
    description:
      "Joel needed help balancing AP Chemistry, Calculus, and Literature. His personalized plan allocated time blocks effectively and included curated practice quizzes...",
    excerpt: "Joel’s Multidisciplinary Success",
    image: "/study-plan-case2.jpg",
  },
  {
    id: 3,
    name: "Reducing Study Anxiety",
    description:
      "Amy struggled with exam stress. Her custom plan integrated short, frequent review sessions and mindfulness breaks, leading to lower anxiety and higher test scores...",
    excerpt: "Amy’s Journey to Confident Studying",
    image: "/study-plan-case3.jpg",
  },
];

// ----------------------------------------------------------
// 3) FEATURES FOR PERSONALIZED STUDY PLANS (ICON GRID)
// ----------------------------------------------------------
const studyPlanFeatures = [
  {
    label: "Adaptive Content",
    icon: <BookOpen className="h-8 w-8" />,
    description: "Study materials match your preferred learning style—text, video, or interactive quizzes."
  },
  {
    label: "Smart Scheduling",
    icon: <Clock className="h-8 w-8" />,
    description: "AI auto-adjusts your study blocks based on availability, deadlines, and performance metrics."
  },
  {
    label: "Immediate Feedback",
    icon: <CheckCircle2 className="h-8 w-8" />,
    description: "See quiz results instantly to focus on the areas that need the most improvement."
  },
  {
    label: "Progress Dashboards",
    icon: <BrainCircuit className="h-8 w-8" />,
    description: "Track study time, topic mastery, and grades over time to visualize your path to success."
  },
  {
    label: "Motivational Checkpoints",
    icon: <Sparkles className="h-8 w-8" />,
    description: "Set weekly goals, earn achievements, and stay inspired with small wins that keep you on track."
  },
  {
    label: "Collaboration Tools",
    icon: <ClipboardList className="h-8 w-8" />,
    description: "Share progress with peers or tutors, get feedback, and plan group study sessions seamlessly."
  },
];

export default function PersonalizedStudyPlansPage() {
  // Parallax effect (optional)
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <>
      <Head>
        <title>Personalized Study Plans | ElevateU</title>
        <meta
          name="description"
          content="Optimize your learning with ElevateU’s AI-driven personalized study plans. Tailored to your strengths, preferences, and schedule, our system provides real-time feedback, curated resources, and effective time management strategies."
        />
        <meta
          name="keywords"
          content="personalized study plans, AI-driven learning, study efficiency, academic strengths, time management, custom study plan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook Meta */}
        <meta property="og:title" content="Personalized Study Plans | ElevateU" />
        <meta
          property="og:description"
          content="Our AI analyzes your learning preferences, academic strengths, and schedule to create an optimized study plan that boosts retention and maximizes efficiency."
        />
        <meta property="og:image" content="/og-personalized-study-plans.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.elevateu.com/personalized-study-plans"
        />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Personalized Study Plans | ElevateU" />
        <meta
          name="twitter:description"
          content="Our AI-powered Personalized Study Plans adapt to your learning style, schedule, and academic goals—boosting your performance and retention."
        />
        <meta
          name="twitter:image"
          content="/og-personalized-study-plans.jpg"
        />

        <link
          rel="canonical"
          href="https://www.elevateu.com/personalized-study-plans"
        />

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
              "name": "Personalized Study Plans",
              "description":
                "AI-driven personalized study plans that adapt to each student's learning style, academic strengths, and schedule, providing real-time feedback and curated resources.",
              "url": "https://www.elevateu.com/personalized-study-plans",
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
            {/* Left side (heading + text + CTA) */}
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                Personalized Study Plans
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-secondary">
                Study Smarter, Not Harder
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our AI analyzes your learning preferences, academic strengths,
                and schedule to create an optimized study plan that boosts
                retention and maximizes efficiency. Get customized resources,
                practice materials, and time management strategies—exactly when you need them.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="lg" variant="default" asChild>
                  <Link href="/get-started">Begin Your Custom Study Plan</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right side (image or illustration) */}
            <motion.div
              className="relative w-full h-[300px] md:h-[450px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/personalized-study-plans-hero.jpg"
                alt="Personalized study plans"
                fill
                className="object-cover rounded-lg border border-primary/10 shadow"
                priority
              />
            </motion.div>
          </div>
        </div>
      </header>

      <main>
        {/* WHY AI-DRIVEN STUDY PLANS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="mx-auto mb-12 text-center max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
                Why AI-Driven Study Plans?
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Traditional study methods rarely account for your unique learning style and schedule. Our AI tailors recommendations to your real-world constraints and academic goals—ensuring a plan that evolves as you do.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-secondary">
                  Personalization That Matters
                </h3>
                <p className="text-muted-foreground">
                  From adjusting question difficulty to matching you with the ideal learning format, our system ensures each session counts. Say goodbye to generic study plans.
                </p>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-secondary">
                  Flexible &amp; Adaptive
                </h3>
                <p className="text-muted-foreground">
                  Life happens. Our AI rebalances your schedule if you pick up a new part-time job or add an unexpected activity, ensuring your progress never stalls.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES GRID */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="mx-auto mb-12 text-center max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
                Key Features &amp; Benefits
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Harness the power of advanced AI to study on your own terms and pace.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {studyPlanFeatures.map(({ label, icon, description }) => (
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
                Get started with a quick assessment, then let our AI guide your journey from week to week.
              </p>
            </motion.div>
            <div className="grid gap-12 md:grid-cols-4 md:gap-16">
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
                <h3 className="font-bold text-xl text-secondary">1. Profile &amp; Assessment</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Complete a brief survey detailing your learning style, academic needs, and availability.
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
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-secondary">2. Plan Customization</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Get a detailed, week-by-week strategy featuring recommended materials and exercises.
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
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-secondary">3. Adaptive Feedback</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  After each session, our AI evaluates your progress and adjusts future sessions to fit your evolving needs.
                </p>
              </motion.div>
              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-secondary">4. Ongoing Adjustments</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Update your plan anytime. As your goals or schedule change, your study roadmap adapts accordingly.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-secondary">
              Case Studies
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto md:text-lg">
              Discover how students like you transformed their study habits and academic performance with ElevateU.
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
                Personalized Study Plans FAQs
              </h2>
              <p className="mx-auto mt-4 text-muted-foreground md:text-lg">
                Have questions about how our AI-powered study plans can help you optimize your learning? We’ve got answers.
              </p>
            </motion.div>
            <div className="mx-auto max-w-3xl">
              <FAQAccordion
                items={[
                  {
                    question: "How are these study plans personalized?",
                    answer:
                      "Our AI evaluates your schedule, academic goals, and learning preferences to customize lesson formats, difficulty levels, and practice intervals. This ensures a highly efficient, personalized experience."
                  },
                  {
                    question: "Do I need to update the system if my schedule changes?",
                    answer:
                      "Absolutely. You can log changes in your availability, upcoming exams, or new subjects, and the platform will automatically adjust your study blocks and resource recommendations."
                  },
                  {
                    question: "What kind of resources does the AI provide?",
                    answer:
                      "We offer a curated mix—videos, quizzes, flashcards, and reading materials—tailored to your unique learning style and current knowledge gaps."
                  },
                  {
                    question: "Is there a limit to how many subjects I can include?",
                    answer:
                      "No. Our system can handle multiple subjects simultaneously, adapting your schedule and resources to ensure balanced progress across all areas you choose."
                  },
                  {
                    question: "How quickly can I see results?",
                    answer:
                      "Most users report improved retention and better time management within a few weeks of consistent use. Longer-term benefits, like grade improvements, typically become evident over an academic term."
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="container py-16 md:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 text-secondary">
            Ready to Elevate Your Learning?
          </h2>
          <p className="text-muted-foreground md:text-lg mb-12 max-w-3xl mx-auto">
            Start your journey with a study plan that adapts to your life—boosting 
            retention, grades, and confidence every step of the way.
          </p>
          <Button size="lg" variant="default" asChild>
            <Link href="/get-started">Begin Your Custom Study Plan</Link>
          </Button>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
