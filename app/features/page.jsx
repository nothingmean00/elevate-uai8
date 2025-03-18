"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Search, 
  DollarSign, 
  GraduationCap, 
  Award, 
  Star,
  MessageSquare,
  BrainCircuit,
  BookOpen,
  Clock,
  Target,
  Sparkles,
  CheckCircle2,
  Brain,
  Calculator,
  FileText,
  Lightbulb,
  PenTool,
  Users,
  Building,
  BookOpenCheck,
  CircleDollarSign,
  BadgeCheck,
  School,
  MessagesSquare,
  Laptop,
  ChartBar,
  Bot,
  Mail,
  BrainCog,
  Send,
  Calendar,
  LineChart,
  ChevronRight,
  ChevronLeft,
  FileEdit,
  BookMarked,
  BarChart,
  Zap
} from "lucide-react";
import { FAQAccordion } from "@/components/faq-accordion";

// Features categories and items
const featureCategories = [
  {
    id: "ai-tools",
    name: "AI Learning Tools",
    icon: <BrainCircuit className="h-10 w-10" />,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    features: [
      {
        title: "AI Chatbot Counselor",
        description: "24/7 guidance on college admissions, test prep, financial aid, and career planning.",
        icon: <Bot className="h-12 w-12" />,
        highlights: ["Instant answers to complex questions", "Personalized recommendations", "Updated with latest admissions trends"]
      },
      {
        title: "Personalized Study Plans",
        description: "Custom learning schedules that adapt to your preferences, strengths, and available time.",
        icon: <Calendar className="h-12 w-12" />,
        highlights: ["Smart scheduling algorithms", "Adapts to your progress", "Optimized for your learning style"]
      },
      {
        title: "Smart Essay Feedback",
        description: "AI-powered analysis of your writing with suggestions for improvement.",
        icon: <PenTool className="h-12 w-12" />,
        highlights: ["Grammar and style feedback", "Structure recommendations", "University-specific insights"]
      }
    ]
  },
  {
    id: "test-prep",
    name: "Test Preparation",
    icon: <BookOpen className="h-10 w-10" />,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    features: [
      {
        title: "Adaptive Practice Tests",
        description: "Dynamically adjusting question difficulty based on your performance.",
        icon: <Calculator className="h-12 w-12" />,
        highlights: ["Simulates real test conditions", "Focus on your weak areas", "Performance analytics"]
      },
      {
        title: "Video Lessons Library",
        description: "Comprehensive collection of video tutorials covering all test subjects.",
        icon: <BookOpenCheck className="h-12 w-12" />,
        highlights: ["Expert instructors", "Searchable content", "Bookmarkable sections"]
      },
      {
        title: "Spaced Repetition Flashcards",
        description: "Science-backed flashcard system that optimizes memory retention.",
        icon: <Brain className="h-12 w-12" />,
        highlights: ["Automatically scheduled reviews", "Multimedia content", "Progress tracking"]
      }
    ]
  },
  {
    id: "planning",
    name: "College & Career Planning",
    icon: <Target className="h-10 w-10" />,
    color: "bg-green-50 text-green-600 border-green-100",
    features: [
      {
        title: "College Match Finder",
        description: "Discover schools that align with your academic profile and preferences.",
        icon: <School className="h-12 w-12" />,
        highlights: ["Personalized recommendations", "Acceptance probability", "Campus culture insights"]
      },
      {
        title: "Scholarship Database",
        description: "Comprehensive listing of scholarships with personalized matching.",
        icon: <CircleDollarSign className="h-12 w-12" />,
        highlights: ["$1.5B+ in funding opportunities", "Application deadline reminders", "Essay requirements"]
      },
      {
        title: "Career Pathway Explorer",
        description: "Interactive tool to explore potential careers based on your interests.",
        icon: <BarChart className="h-12 w-12" />,
        highlights: ["Salary projections", "Required education", "Recommended coursework"]
      }
    ]
  },
  {
    id: "tools",
    name: "Learning Tools & Analytics",
    icon: <LineChart className="h-10 w-10" />,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    features: [
      {
        title: "Progress Dashboard",
        description: "Visualize your improvement across all subjects and activities.",
        icon: <ChartBar className="h-12 w-12" />,
        highlights: ["Visual progress indicators", "Time management insights", "Goal setting tools"]
      },
      {
        title: "Study Group Finder",
        description: "Connect with peers working on similar subjects or preparing for the same tests.",
        icon: <Users className="h-12 w-12" />,
        highlights: ["Virtual study rooms", "Shared resources", "Scheduled sessions"]
      },
      {
        title: "Parent & Mentor Portal",
        description: "Share progress with parents or mentors with customizable privacy controls.",
        icon: <FileText className="h-12 w-12" />,
        highlights: ["Weekly progress reports", "Goal tracking", "Communication tools"]
      }
    ]
  }
];

// Case studies data
const successStories = [
  {
    id: 1,
    name: "From Struggling to Stanford",
    description:
      "Sarah was scoring in the 65th percentile on practice SATs. Using our adaptive tests and personalized study plan, she reached the 98th percentile and was accepted to Stanford.",
    image: "/avatars/sarah.jpg",
    icon: <Award className="h-16 w-16" />,
    stats: [
      { label: "Score Improvement", value: "33%" },
      { label: "Study Time", value: "4 months" },
      { label: "Acceptance", value: "Stanford" }
    ],
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: 2,
    name: "Balancing Multiple Priorities",
    description:
      "As a student athlete, Marco struggled to balance training and academics. Our AI-powered scheduling helped him maintain his GPA while excelling in sports.",
    image: "/avatars/marco.jpg",
    icon: <Clock className="h-16 w-16" />,
    stats: [
      { label: "GPA Increase", value: "0.7" },
      { label: "Weekly Study", value: "15 hrs" },
      { label: "Sports Time", value: "Maintained" }
    ],
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    name: "Scholarship Success",
    description:
      "Jasmine used our scholarship database and essay feedback tools to apply for 15 scholarships. She received 7 awards totaling $42,000 toward her education.",
    image: "/avatars/jasmine.jpg",
    icon: <DollarSign className="h-16 w-16" />,
    stats: [
      { label: "Applications", value: "15" },
      { label: "Success Rate", value: "47%" },
      { label: "Total Aid", value: "$42K" }
    ],
    color: "bg-green-100 text-green-600",
  },
];

// Platform stats to highlight 
const platformStats = [
  {
    value: "94%",
    label: "Student Satisfaction",
    icon: <Star className="h-8 w-8" />,
    color: "bg-amber-50 text-amber-600"
  },
  {
    value: "3.2x",
    label: "Study Efficiency",
    icon: <Zap className="h-8 w-8" />,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    value: "87%",
    label: "College Acceptance",
    icon: <GraduationCap className="h-8 w-8" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    value: "$38K",
    label: "Avg. Scholarship",
    icon: <CircleDollarSign className="h-8 w-8" />,
    color: "bg-green-50 text-green-600"
  }
];

// How it works steps
const howItWorksSteps = [
  {
    title: "Assessment & Personalization",
    description: "Take a comprehensive assessment that evaluates your learning style, academic strengths, schedule, and goals.",
    icon: <FileEdit className="h-14 w-14 text-primary" />
  },
  {
    title: "AI-Powered Planning",
    description: "Our AI creates a customized learning path with personalized resources, schedules, and strategies.",
    icon: <BrainCog className="h-14 w-14 text-primary" />
  },
  {
    title: "Consistent Progress",
    description: "Follow your plan with regular check-ins and adaptive content that evolves as you improve.",
    icon: <Target className="h-14 w-14 text-primary" />
  },
  {
    title: "Real-Time Adjustments",
    description: "As your needs change, our platform automatically adjusts your plan to keep you on track to your goals.",
    icon: <Sparkles className="h-14 w-14 text-primary" />
  }
];

// FAQ items
const faqItems = [
  {
    question: "How personalized is the learning experience?",
    answer: "ElevateU uses advanced AI algorithms to analyze your learning style, academic strengths and weaknesses, schedule constraints, and specific goals. This creates a deeply personalized experience that adapts to your needs in real-time, from content delivery methods to practice question difficulty and study session timing."
  },
  {
    question: "Can I use ElevateU for multiple subjects simultaneously?",
    answer: "Absolutely! ElevateU is designed to help you manage multiple subjects concurrently. Our AI optimally allocates your study time across subjects based on priority, upcoming deadlines, and your proficiency levels in each area. The system ensures balanced progress while focusing more attention on areas that need improvement."
  },
  {
    question: "How does the AI Chatbot differ from regular search engines?",
    answer: "Unlike search engines that return generic results, our AI Chatbot Counselor provides personalized guidance specific to your situation. It remembers your previous questions, understands context, and can provide step-by-step advice tailored to your academic profile and goals. The chatbot is trained on up-to-date admissions data and best practices from educational experts."
  },
  {
    question: "Is there support for specific standardized tests?",
    answer: "Yes, ElevateU provides comprehensive support for all major standardized tests including SAT, ACT, AP exams, GRE, GMAT, and more. Each test has customized preparation materials, practice questions calibrated to the latest test versions, and specific strategies developed by experts who scored in the top percentiles."
  },
  {
    question: "How quickly can I expect to see improvements in my performance?",
    answer: "Most students notice improvements in study efficiency and information retention within 2-3 weeks of consistent use. Measurable improvements in test scores typically appear after 4-6 weeks, while significant grade improvements are often seen within a single academic term. The rate of improvement varies based on consistency of use and individual factors."
  }
];

// Custom success stories carousel component
const SuccessStoriesCarousel = ({ stories }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg border border-primary/10 bg-white p-6 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          {/* Icon section */}
          <div className={`flex items-center justify-center rounded-full p-10 ${stories[activeIndex].color}`}>
            {stories[activeIndex].icon}
          </div>
          
          {/* Content section */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-secondary">{stories[activeIndex].name}</h3>
            <p className="text-muted-foreground">{stories[activeIndex].description}</p>
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {stories[activeIndex].stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="mt-4 flex justify-center space-x-2">
        <button
          onClick={prevSlide}
          className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          aria-label="Previous success story"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full ${
              activeIndex === index ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to success story ${index + 1}`}
          />
        ))}
        <button
          onClick={nextSlide}
          className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          aria-label="Next success story"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default function ElevateUFeaturesPage() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <>
      <Head>
        <title>ElevateU Features | AI-Powered Education Platform</title>
        <meta
          name="description"
          content="Discover how ElevateU's AI-powered features can transform your educational journey. From personalized study plans to intelligent test prep, college counseling, and career guidance."
        />
        <meta
          name="keywords"
          content="ai education, personalized learning, study plans, college counseling, test prep, career guidance, education technology, adaptive learning"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ElevateU Features | AI-Powered Education Platform" />
        <meta
          property="og:description"
          content="Our comprehensive suite of AI-powered educational tools helps students excel in academics, test preparation, college admissions, and career planning."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.elevateu.com/features" />
        <link rel="canonical" href="https://www.elevateu.com/features" />
      </Head>

      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-b from-primary/5 to-muted">
        <div className="container relative z-10 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
              <BrainCircuit className="h-5 w-5 mr-2" />
              AI-Powered Education Platform
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-secondary mb-6">
              All the Tools You Need to Succeed
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
              ElevateU combines AI-powered learning tools, personalized guidance, and data-driven insights to help you achieve your academic and career goals.
            </p>
          </div>
          
          {/* Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {platformStats.map((stat, index) => (
              <motion.div 
                key={index}
                className={`${stat.color} rounded-xl p-6 shadow-sm border border-primary/5 flex flex-col items-center text-center`}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      {/* FEATURE CATEGORIES */}
      <section className="py-16 md:py-24 bg-muted" id="feature-categories">
        <div className="container">
          {featureCategories.map((category, catIndex) => (
            <div key={category.id} className={`mb-16 ${catIndex !== featureCategories.length - 1 ? 'mb-24' : ''}`}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
                <div className={`h-16 w-16 rounded-full ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-secondary">{category.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl border border-primary/10 p-6 shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* HOW IT WORKS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
              How ElevateU Works
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Our platform adapts to your unique learning journey every step of the way.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary/10 mx-auto">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl text-secondary">{`${index + 1}. ${step.title}`}</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* "Connect the dots" line between steps (optional) */}
          <div className="hidden md:block relative max-w-5xl mx-auto">
            <div className="absolute top-[-120px] left-[12%] right-[12%] border-t-2 border-dashed border-primary/20"></div>
          </div>
        </div>
      </section>
      
      {/* SUCCESS STORIES */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary mb-4">
              <Star className="h-5 w-5 mr-2" />
              Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
              Real Results from Real Students
            </h2>
            <p className="text-muted-foreground md:text-lg">
              See how students like you achieved their academic and career goals with ElevateU.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SuccessStoriesCarousel stories={successStories} />
          </div>
        </div>
      </section>
      
      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mx-auto mb-12 text-center max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
              <MessageSquare className="h-5 w-5 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary mb-4">
              Common Questions About ElevateU
            </h2>
            <p className="mx-auto mt-4 text-muted-foreground md:text-lg">
              Everything you need to know about our platform and how it can help you succeed.
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
      
      {/* FINAL CTA */}
      <section className="container py-16 md:py-24 text-center">
        <div className="relative bg-gradient-to-r from-primary/5 to-primary/10 p-12 rounded-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 text-secondary">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-muted-foreground md:text-lg mb-12 max-w-3xl mx-auto">
            Join thousands of students who have elevated their academic performance and achieved their dream college and career goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="default" asChild>
              <Link href="/signup">
                <span className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">
                <span className="flex items-center">
                  View Pricing
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 