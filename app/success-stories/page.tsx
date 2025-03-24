"use client";

import { useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import TestimonialRotator from "@/components/testimonial-rotator";
import { AnimatedBackground } from "@/components/animated-background";
import { FAQAccordion } from "@/components/faq-accordion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

// 20 Success Stories with no images and added "category" field
const successStories = [
  {
    id: 1,
    name: "Rising SAT Star",
    description:
      "Increased SAT score dramatically with unlimited practice and targeted essay guidance.",
    excerpt: "SAT Score Boost",
    category: "SAT",
  },
  {
    id: 2,
    name: "Scholarship Success",
    description:
      "Secured multiple scholarships with personalized application support.",
    excerpt: "Scholarship Winner",
    category: "Scholarship",
  },
  {
    id: 3,
    name: "Career Kickstart",
    description:
      "Landed a top internship using a dynamic AI career roadmap.",
    excerpt: "Internship Achieved",
    category: "Career",
  },
  {
    id: 4,
    name: "Mentorship Magic",
    description:
      "Connected with mentors who transformed career prospects with expert guidance.",
    excerpt: "Mentorship Triumph",
    category: "Mentorship",
  },
  {
    id: 5,
    name: "Essay Excellence",
    description:
      "Enhanced application essays with advanced AI feedback to gain admission into elite colleges.",
    excerpt: "Essay Mastery",
    category: "Essay",
  },
  {
    id: 6,
    name: "Networking Pro",
    description:
      "Built a global network and secured industry connections through tailored support.",
    excerpt: "Networking Success",
    category: "Networking",
  },
  {
    id: 7,
    name: "Application Ace",
    description:
      "Streamlined the college application process with adaptive AI assistance.",
    excerpt: "Application Optimized",
    category: "Application",
  },
  {
    id: 8,
    name: "Test Prep Triumph",
    description:
      "Achieved top test scores by utilizing rigorous AI-generated practice modules.",
    excerpt: "Test Prep Victory",
    category: "Test Prep",
  },
  {
    id: 9,
    name: "Academic Transformation",
    description:
      "Improved study habits and overall performance through smart, data-driven planning.",
    excerpt: "Academic Growth",
    category: "Academic",
  },
  {
    id: 10,
    name: "Dream College Entry",
    description:
      "Gained admission to a dream college with personalized guidance and resourceful planning.",
    excerpt: "College Entry",
    category: "College",
  },
  {
    id: 11,
    name: "Leadership Leap",
    description:
      "Advanced into leadership roles with support from experienced mentors.",
    excerpt: "Leadership Success",
    category: "Leadership",
  },
  {
    id: 12,
    name: "Creative Catalyst",
    description:
      "Elevated creative projects using expert feedback and innovative strategies.",
    excerpt: "Creative Excellence",
    category: "Creative",
  },
  {
    id: 13,
    name: "Entrepreneurial Edge",
    description:
      "Launched a startup idea with targeted mentorship and strategic planning.",
    excerpt: "Startup Launch",
    category: "Startup",
  },
  {
    id: 14,
    name: "Global Perspective",
    description:
      "Expanded horizons with international recommendations and networking opportunities.",
    excerpt: "Global Vision",
    category: "Global",
  },
  {
    id: 15,
    name: "Skill Set Sharpened",
    description:
      "Acquired in-demand skills through personalized course and practice recommendations.",
    excerpt: "Skills Enhanced",
    category: "Skills",
  },
  {
    id: 16,
    name: "Confidence Builder",
    description:
      "Overcame academic challenges and boosted self-confidence with continuous support.",
    excerpt: "Confidence Boosted",
    category: "Confidence",
  },
  {
    id: 17,
    name: "Holistic Success",
    description:
      "Balanced academics, extracurriculars, and personal growth for comprehensive success.",
    excerpt: "Holistic Achievement",
    category: "Holistic",
  },
  {
    id: 18,
    name: "Career Ready",
    description:
      "Prepared for post-college careers with practical, data-driven mentorship and planning.",
    excerpt: "Career Prepared",
    category: "Career",
  },
  {
    id: 19,
    name: "Strategic Planner",
    description:
      "Optimized study routines and time management with AI-powered planning tools.",
    excerpt: "Strategic Success",
    category: "Strategy",
  },
  {
    id: 20,
    name: "Future Leader",
    description:
      "Developed leadership skills and secured key opportunities to shape a promising future.",
    excerpt: "Future Leadership",
    category: "Leadership",
  },
];

export default function SuccessStoriesPage() {
  const { scrollYProgress } = useScroll();

  // Filter stories by selected category; if "All", show all.
  const filteredStories = useMemo(() => {
    return successStories;
  }, []);

  return (
    <>
      <Head>
        <title>ElevateU Success Stories</title>
        <meta
          name="description"
          content="Read about real student success stories at ElevateU, from skyrocketing SAT scores to life-changing career breakthroughs."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.elevateu.com/success-stories" />
      </Head>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#5E3CB3] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO SECTION with Animated Background */}
      <header className="relative overflow-hidden bg-[#F4F4F7]">
        <AnimatedBackground />
        <div className="container relative z-10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-[#5E3CB3]/20 bg-[#5E3CB3]/10 px-4 py-1 text-sm text-[#5E3CB3] uppercase tracking-wide">
                  Real Results
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#2A2D43]">
                  Success Stories
                </h1>
                <p className="max-w-xl text-lg text-[#4A4A4A]">
                  Discover how students transformed their academic journeys and career paths using ElevateU's advanced AI tools.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">
                      <span className="flex items-center gap-1.5">
                        Start Your Journey
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </div>
              </div>
              {/* Decorative element (no image) */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <img 
                    src="/images/GPAs-Are-Still-Among-the-Best-Predictors-of-College-Success-Big.webp" 
                    alt="GPAs are still among the best predictors of college success" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* KEY METRICS SECTION */}
        <section className="py-8 bg-[#F4F4F7]">
          <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#2A2D43]">+300</h3>
              <p className="text-[#4A4A4A] text-sm">SAT Score Increase (Avg)</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#2A2D43]">$1.2M</h3>
              <p className="text-[#4A4A4A] text-sm">Scholarships Awarded</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#2A2D43]">95%</h3>
              <p className="text-[#4A4A4A] text-sm">Admission Rate to Top Colleges</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#2A2D43]">+50</h3>
              <p className="text-[#4A4A4A] text-sm">Active Industry Mentors</p>
            </div>
          </div>
        </section>

        {/* HIGHLIGHT BENEFITS SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="mx-auto mb-12 text-center max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-[#2A2D43] mb-4">
                Transforming Dreams into Reality
              </h2>
              <p className="text-[#4A4A4A] md:text-lg">
                ElevateU's cutting-edge AI tools and expert mentorship have helped countless students excel—boosting test scores, securing scholarships, and launching successful careers.
              </p>
            </div>
            <motion.ul
              className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {[
                "Boost your SAT scores",
                "Secure life-changing scholarships",
                "Land top internships",
                "Build a robust professional network",
                "Craft standout essays",
                "Develop leadership skills",
              ].map((point, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2 text-[#4A4A4A]"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <CheckCircle2 className="h-5 w-5 text-[#5E3CB3] mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* CAROUSEL OF SUCCESS STORIES */}
        <section className="py-16 md:py-24 bg-[#F4F4F7]">
          <div className="container">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2A2D43]">
                Real Student Triumphs
              </h3>
              <p className="mt-4 text-[#4A4A4A] md:text-lg max-w-2xl mx-auto">
                Explore how students achieved success through our innovative platform—each story a testament to determination and smart strategy.
              </p>
            </div>
            <TestimonialRotator caseStudies={filteredStories} />
          </div>
        </section>

        {/* PRO TIPS SECTION */}
        <section className="py-12 bg-white">
          <div className="container">
            <h3 className="text-2xl font-bold text-[#2A2D43] text-center mb-4">
              Pro Tips for Success
            </h3>
            <ul className="list-disc list-inside text-[#4A4A4A] max-w-2xl mx-auto space-y-2">
              <li><strong>Set Mini-Goals:</strong> Break down your targets into weekly achievements.</li>
              <li><strong>Time Block Study Sessions:</strong> Focus in short bursts and take regular breaks.</li>
              <li><strong>Seek Feedback:</strong> Regularly consult mentors and peers for improvement.</li>
            </ul>
          </div>
        </section>

        {/* JOURNEY TIMELINE SECTION */}
        <section className="py-16 bg-[#F4F4F7]">
          <div className="container">
            <h3 className="text-3xl font-bold text-[#2A2D43] text-center mb-6">
              Your Journey to Success
            </h3>
            <ol className="max-w-3xl mx-auto border-l-2 border-[#5E3CB3] pl-6 space-y-4 text-[#4A4A4A]">
              <li>
                <span className="font-bold text-[#2A2D43]">Step 1:</span> Sign up and set clear academic goals.
              </li>
              <li>
                <span className="font-bold text-[#2A2D43]">Step 2:</span> Get a personalized roadmap powered by AI.
              </li>
              <li>
                <span className="font-bold text-[#2A2D43]">Step 3:</span> Engage in unlimited practice and mentorship.
              </li>
              <li>
                <span className="font-bold text-[#2A2D43]">Step 4:</span> Track your progress and refine your strategy.
              </li>
              <li>
                <span className="font-bold text-[#2A2D43]">Step 5:</span> Celebrate your success and plan your future.
              </li>
            </ol>
          </div>
        </section>

        {/* REQUEST DEMO CTA */}
        <section className="py-16 bg-white text-center">
          <div className="container">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2A2D43] mb-4">
              Want a Live Walkthrough?
            </h3>
            <p className="max-w-xl mx-auto text-[#4A4A4A] mb-8">
              Join our weekly webinar and see how ElevateU's advanced AI transforms your study and application journey.
            </p>
            <Button size="lg" variant="default" asChild>
              <Link href="/contact" prefetch={true}>Request Demo</Link>
            </Button>
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
              <div className="inline-flex items-center rounded-full border border-[#5E3CB3]/20 bg-[#5E3CB3]/10 px-3 py-1 text-sm text-[#5E3CB3] mb-6">
                Frequently Asked
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2A2D43]">
                Success Story FAQs
              </h2>
              <p className="mx-auto mt-4 text-[#4A4A4A] md:text-lg">
                Get answers to common questions about achieving success with ElevateU's tools and mentorship.
              </p>
            </motion.div>
            <div className="mx-auto max-w-3xl">
              <FAQAccordion
                items={[
                  {
                    question: "How can I achieve similar results?",
                    answer:
                      "Success is a journey. By engaging consistently with ElevateU's personalized study plans, mentorship, and AI tools, you can steadily improve your academic performance and unlock new opportunities.",
                  },
                  {
                    question: "How long does it take to see improvements?",
                    answer:
                      "Results vary by individual. Some students notice changes within a few months, while others may take a semester. Consistency and leveraging tailored resources are key.",
                  },
                  {
                    question: "Can these success stories be replicated?",
                    answer:
                      "Absolutely. Our platform is designed to highlight your unique strengths and guide you step-by-step toward your goals.",
                  },
                  {
                    question: "Is support available throughout the process?",
                    answer:
                      "Yes. In addition to advanced AI tools, you'll have access to expert mentors and peer networks to help you at every stage.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="container py-16 md:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 text-[#2A2D43]">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-[#4A4A4A] md:text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of students who have transformed their futures with ElevateU. Start your journey today.
          </p>
          <Button size="lg" variant="default" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </section>
      </main>
    </>
  );
}
