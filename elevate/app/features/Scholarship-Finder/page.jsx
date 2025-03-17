"use client";

import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteFooter from "@/components/site-footer";

export default function AiChatbotCounselorPage() {
  return (
    <>
      {/* SEO-Optimized Meta Tags */}
      <Head>
        <title>AI Chatbot Counselor | ElevateU</title>
        <meta
          name="description"
          content="ElevateU’s AI Chatbot Counselor uses advanced natural language processing to provide personalized guidance on SAT prep, college admissions, career planning, and more. Get instant, accurate answers to streamline your journey toward higher education."
        />
        <meta
          name="keywords"
          content="AI Chatbot, college admissions, SAT prep, career planning, financial aid, AI in education, chatbot counselor, university applications, AI-powered learning"
        />
        <meta property="og:title" content="AI Chatbot Counselor | ElevateU" />
        <meta
          property="og:description"
          content="Our advanced AI chatbot uses natural language processing to understand your questions and provide personalized, accurate responses about college admissions, career planning, financial aid, and more. Get instant answers whenever you need them."
        />
        <meta property="og:image" content="/og-ai-chatbot-counselor.jpg" />
        <link rel="canonical" href="https://www.elevateu.com/ai-chatbot-counselor" />

        {/* Structured Data: Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "AI Chatbot Counselor",
              description:
                "Advanced AI chatbot for college admissions, SAT prep, career planning, and financial aid guidance. Leverages natural language processing to provide personalized, on-demand answers.",
              url: "https://www.elevateu.com/ai-chatbot-counselor",
              provider: {
                "@type": "Organization",
                name: "ElevateU",
              },
            }),
          }}
        />
      </Head>

      <main id="main-content" className="container py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-4xl">
            {/* Page Header */}
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                AI Chatbot Counselor
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                AI Chatbot Counselor
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
                Our advanced AI chatbot uses natural language processing to understand
                your questions and provide personalized, accurate responses about
                college admissions, career planning, financial aid, and more.
                Get instant answers whenever you need them.
              </p>
            </div>

            <div className="space-y-12">
              {/* Why an AI Chatbot for College & Career? */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Why an AI Chatbot for College &amp; Career?
                </h2>
                <p className="text-muted-foreground">
                  Students often face pressing questions about SAT preparation, college
                  applications, or financial aid. Traditional research methods can be
                  time-consuming and overwhelming. Our AI Chatbot Counselor streamlines
                  the process by delivering real-time, tailored guidance on topics ranging
                  from scholarship options to test-taking strategies, letting you find
                  answers fast and focus on achieving your goals.
                </p>
              </motion.div>

              {/* Key Features & Benefits */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Key Features &amp; Benefits
                </h2>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    On-Demand Admissions Guidance
                  </h3>
                  <p className="text-muted-foreground">
                    From “how to write a strong college application essay” to
                    “university-specific prompts,” our chatbot is equipped to provide
                    actionable advice. Ask questions anytime and receive answers
                    aligned with top university requirements and current admissions trends.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    SAT &amp; Test Prep Support
                  </h3>
                  <p className="text-muted-foreground">
                    Whether you’re searching for “best SAT prep tips,” “personalized SAT
                    practice questions,” or strategies to boost math scores, the chatbot
                    delivers resources and study methods tailored to your needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Personalized Career Insights
                  </h3>
                  <p className="text-muted-foreground">
                    Confused about which major or career path to choose? Get guidance
                    on selecting a field that aligns with your interests and skill set.
                    The chatbot can also direct you to the best internships, volunteer
                    opportunities, or extracurriculars to bolster your resume.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Financial Aid &amp; Scholarship Assistance
                  </h3>
                  <p className="text-muted-foreground">
                    Navigating scholarships, grants, and loans can be tricky. Ask the
                    chatbot about “FAFSA deadlines,” “merit-based scholarships,” or
                    “cost-effective universities” for instant, reliable information.
                  </p>
                </div>
              </motion.div>

              {/* How It Works */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  How It Works
                </h2>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    1. Ask Your Question
                  </h3>
                  <p className="text-muted-foreground">
                    Simply type in your query—whether it’s about SAT test dates,
                    college application essays, or job outlook in a certain field.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    2. AI-Powered Analysis
                  </h3>
                  <p className="text-muted-foreground">
                    Our chatbot uses natural language processing (NLP) to
                    interpret your query and references extensive data on admissions,
                    scholarships, and more to craft a concise, personalized response.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    3. Tailored Guidance &amp; Resources
                  </h3>
                  <p className="text-muted-foreground">
                    Receive next steps, article recommendations, or direct links
                    to relevant study guides and official resources. The system
                    aims to get you from question to solution as quickly as possible.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    4. Continuous Learning
                  </h3>
                  <p className="text-muted-foreground">
                    The chatbot “learns” from user interactions, continually refining
                    its responses. As it receives more questions, it becomes even more
                    accurate and helpful in guiding future queries.
                  </p>
                </div>
              </motion.div>

              {/* SEO-Focused Content Section */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Boost Your College Readiness &amp; Career Prospects
                </h2>
                <p className="text-muted-foreground">
                  By leveraging AI in education, you gain a 24/7 virtual assistant
                  adept at handling inquiries about college readiness, SAT prep,
                  scholarship opportunities, and more. As AI-powered tools continue
                  to grow in popularity worldwide, tapping into this trend can
                  significantly streamline your college application process and
                  enhance your academic performance.
                </p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Prepare for standardized tests with confidence</li>
                  <li>Get expert-level advice on personal statements and essays</li>
                  <li>Explore the latest scholarship and financial aid options</li>
                  <li>Receive tips on building a strong extracurricular profile</li>
                </ul>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Get Instant Answers Today
                </h2>
                <p className="text-muted-foreground mb-6">
                  Curious about the “best way to prepare for the SAT” or looking for
                  “college readiness skills for freshmen”? Our AI Chatbot Counselor
                  is here to help with all your burning questions—anytime, anywhere.
                </p>
                <Button size="lg" asChild>
                  <Link href="/get-started">Ask the Chatbot</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Global site footer */}
      <SiteFooter />
    </>
  );
}
