"use client"

import Link from "next/link"
// These icons are guaranteed to exist in lucide-react@latest:
import { School2, ArrowRight } from "lucide-react"
// Import Framer Motion for scroll animations (advanced feature)
import { motion } from "framer-motion"

export default function CaseStudiesSection() {
  // Animation variants for a subtle fade-in effect
  const caseStudyVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="container py-12 md:py-24" aria-labelledby="case-studies">
      <div className="mx-auto max-w-4xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Case Studies
          </div>
          <h2 id="case-studies" className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Inspiring Success Stories in AI College Counseling
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Discover how ElevateU’s advanced AI-powered college counseling, personalized application strategies, and targeted scholarship matching have propelled students to elite admissions, career breakthroughs, and academic excellence.
          </p>
        </div>

        {/* Outer Grid for All Case Studies */}
        <div className="grid gap-12">
          {/* CASE STUDY 1 */}
          <motion.article 
            className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyVariants}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            {/* Left Column: Text */}
            <div>
              <meta itemProp="headline" content="Full-Ride Scholarship: Emily Overcomes Average Scores" />
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <School2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4" itemProp="name">
                Full-Ride Scholarship: Emily Overcomes Average Scores
              </h3>
              <p className="text-muted-foreground mb-4" itemProp="description">
                Learn how Emily secured a full-ride scholarship despite average test scores by leveraging ElevateU’s personalized AI roadmap and strategic college application guidance.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Boosted SAT scores with targeted AI insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Secured multiple scholarship offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Optimized application essays with AI-driven feedback</span>
                </li>
              </ul>
              <Link 
                href="/case-studies/full-ride-scholarship" 
                title="Read full case study on Emily's Full-Ride Scholarship"
              >
                <span className="text-primary font-medium hover:underline">
                  Read Full Story →
                </span>
              </Link>
            </div>
            {/* Right Column: Placeholder Visual */}
            <div className="bg-muted rounded-lg p-8 border" aria-hidden="true">
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-primary/20 rounded"></div>
                <div className="h-4 w-full bg-primary/20 rounded"></div>
                <div className="h-4 w-5/6 bg-primary/20 rounded"></div>
                <div className="h-20 w-full bg-primary/10 rounded-lg mt-6"></div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="h-16 bg-primary/20 rounded"></div>
                  <div className="h-16 bg-primary/20 rounded"></div>
                  <div className="h-16 bg-primary/20 rounded"></div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* CASE STUDY 2 */}
          <motion.article 
            className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyVariants}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            {/* Left Column: Placeholder Visual */}
            <div className="order-2 md:order-1 bg-muted rounded-lg p-8 border" aria-hidden="true">
              <div className="space-y-4">
                <div className="h-32 w-full bg-primary/10 rounded-lg"></div>
                <div className="h-4 w-3/4 bg-primary/20 rounded mt-6"></div>
                <div className="h-4 w-full bg-primary/20 rounded"></div>
                <div className="h-4 w-5/6 bg-primary/20 rounded"></div>
                <div className="h-8 w-1/3 bg-primary/30 rounded mt-4"></div>
              </div>
            </div>
            {/* Right Column: Text */}
            <div className="order-1 md:order-2">
              <meta itemProp="headline" content="NYU Stern Acceptance: Jordan’s Standout Application" />
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <School2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4" itemProp="name">
                NYU Stern Acceptance: Jordan’s Standout Application
              </h3>
              <p className="text-muted-foreground mb-4" itemProp="description">
                Discover how Jordan built a compelling application that captured NYU Stern’s attention using ElevateU’s round-the-clock AI essay support and personalized counseling.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Crafted a unique leadership narrative</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Enhanced essays with real-time AI feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Achieved admission to a top-tier business school</span>
                </li>
              </ul>
              <Link 
                href="/case-studies/accepted-into-nyu-stern" 
                title="Read full case study on Jordan’s NYU Stern Acceptance"
              >
                <span className="text-primary font-medium hover:underline">
                  Read Full Story →
                </span>
              </Link>
            </div>
          </motion.article>

          {/* CASE STUDY 3 */}
          <motion.article 
            className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyVariants}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            {/* Left Column: Text */}
            <div>
              <meta itemProp="headline" content="Ivy League Triumph: Sophia's Harvard Admission Journey" />
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <School2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4" itemProp="name">
                Ivy League Triumph: Sophia's Harvard Admission Journey
              </h3>
              <p className="text-muted-foreground mb-4" itemProp="description">
                Discover how Sophia achieved Ivy League success by harnessing ElevateU’s AI-powered college counseling, personalized application strategies, and comprehensive scholarship matching to secure her acceptance into Harvard University.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalized AI guidance for Ivy League applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Expert essay refinement and mentorship support</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Secured multiple financial aid offers</span>
                </li>
              </ul>
              <Link 
                href="/case-studies/harvard-admission-success" 
                title="Read full case study on Sophia's Harvard Admission"
              >
                <span className="text-primary font-medium hover:underline">
                  Read Full Story →
                </span>
              </Link>
            </div>
            {/* Right Column: Placeholder Visual */}
            <div className="bg-muted rounded-lg p-8 border" aria-hidden="true">
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-primary/20 rounded"></div>
                <div className="h-4 w-full bg-primary/20 rounded"></div>
                <div className="h-4 w-5/6 bg-primary/20 rounded"></div>
                <div className="h-20 w-full bg-primary/10 rounded-lg mt-6"></div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="h-16 bg-primary/20 rounded"></div>
                  <div className="h-16 bg-primary/20 rounded"></div>
                  <div className="h-16 bg-primary/20 rounded"></div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* CASE STUDY 4 */}
          <motion.article 
            className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyVariants}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            {/* Left Column: Placeholder Visual */}
            <div className="order-2 md:order-1 bg-muted rounded-lg p-8 border" aria-hidden="true">
              <div className="space-y-4">
                <div className="h-32 w-full bg-primary/10 rounded-lg"></div>
                <div className="h-4 w-3/4 bg-primary/20 rounded mt-6"></div>
                <div className="h-4 w-full bg-primary/20 rounded"></div>
                <div className="h-4 w-5/6 bg-primary/20 rounded"></div>
                <div className="h-8 w-1/3 bg-primary/30 rounded mt-4"></div>
              </div>
            </div>
            {/* Right Column: Text */}
            <div className="order-1 md:order-2">
              <meta itemProp="headline" content="STEM Innovation: Michael's MIT Acceptance and Scholarship Victory" />
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <School2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4" itemProp="name">
                STEM Innovation: Michael's MIT Acceptance and Scholarship Victory
              </h3>
              <p className="text-muted-foreground mb-4" itemProp="description">
                Explore Michael's inspiring success story as he leveraged ElevateU’s cutting-edge AI roadmap and strategic guidance to secure admission to MIT along with multiple tech scholarships for his STEM pursuits.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Customized AI-driven STEM pathway development</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Targeted scholarship matching for technical excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Enhanced academic portfolio with real-time AI feedback</span>
                </li>
              </ul>
              <Link 
                href="/case-studies/mit-stem-success" 
                title="Read full case study on Michael's MIT STEM Success"
              >
                <span className="text-primary font-medium hover:underline">
                  Read Full Story →
                </span>
              </Link>
            </div>
          </motion.article>

          {/* CASE STUDY 5 */}
          <motion.article 
            className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyVariants}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            {/* Left Column: Text */}
            <div>
              <meta itemProp="headline" content="Business Excellence: Olivia's GMAT Breakthrough Leading to Wharton Admission" />
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <School2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4" itemProp="name">
                Business Excellence: Olivia's GMAT Breakthrough Leading to Wharton Admission
              </h3>
              <p className="text-muted-foreground mb-4" itemProp="description">
                Discover how Olivia transformed her business school aspirations into reality using ElevateU’s 24/7 AI counseling, dynamic application coaching, and targeted GMAT preparation to secure a coveted spot at Wharton School of Business.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>AI-enhanced GMAT preparation and strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalized business application coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Real-time feedback and scholarship insights</span>
                </li>
              </ul>
              <Link 
                href="/case-studies/wharton-business-success" 
                title="Read full case study on Olivia's GMAT Business Success"
              >
                <span className="text-primary font-medium hover:underline">
                  Read Full Story →
                </span>
              </Link>
            </div>
            {/* Right Column: Placeholder Visual */}
            <div className="bg-muted rounded-lg p-8 border" aria-hidden="true">
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-primary/20 rounded"></div>
                <div className="h-4 w-full bg-primary/20 rounded"></div>
                <div className="h-4 w-5/6 bg-primary/20 rounded"></div>
                <div className="h-20 w-full bg-primary/10 rounded-lg mt-6"></div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="h-16 bg-primary/20 rounded"></div>
                  <div className="h-16 bg-primary/20 rounded"></div>
                  <div className="h-16 bg-primary/20 rounded"></div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* CASE STUDY 6 */}
          <motion.article 
            className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyVariants}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            {/* Left Column: Placeholder Visual */}
            <div className="order-2 md:order-1 bg-muted rounded-lg p-8 border" aria-hidden="true">
              <div className="space-y-4">
                <div className="h-32 w-full bg-primary/10 rounded-lg"></div>
                <div className="h-4 w-3/4 bg-primary/20 rounded mt-6"></div>
                <div className="h-4 w-full bg-primary/20 rounded"></div>
                <div className="h-4 w-5/6 bg-primary/20 rounded"></div>
                <div className="h-8 w-1/3 bg-primary/30 rounded mt-4"></div>
              </div>
            </div>
            {/* Right Column: Text */}
            <div className="order-1 md:order-2">
              <meta itemProp="headline" content="Creative Arts Revolution: Liam’s Journey to NYU Tisch Success" />
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <School2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4" itemProp="name">
                Creative Arts Revolution: Liam’s Journey to NYU Tisch Success
              </h3>
              <p className="text-muted-foreground mb-4" itemProp="description">
                Uncover Liam’s remarkable transformation as he harnessed ElevateU’s AI-powered creative guidance, personalized mentorship, and comprehensive application support to successfully transfer to NYU Tisch School of the Arts.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>AI-driven creative portfolio enhancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Expert artistic mentorship and application guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Competitive edge in art school admissions</span>
                </li>
              </ul>
              <Link 
                href="/case-studies/nyu-tisch-creative-success" 
                title="Read full case study on Liam's NYU Tisch Creative Success"
              >
                <span className="text-primary font-medium hover:underline">
                  Read Full Story →
                </span>
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
