import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookOpen,
  Clock,
  Users,
  BrainCircuit,
  FileEdit,
  UserPlus,
  Search,
  MessageSquare,
  BookMarked,
} from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FeatureCard } from "@/components/feature-card"
import { AnimatedBackground } from "@/components/animated-background"
import { FAQAccordion } from "@/components/faq-accordion"

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="NYU Washington Square Arch"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5" />
        </div>
        <div className="container relative z-10 py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                AI-Powered Education
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Unlock Your Future with AI-Powered College and Career Counseling
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                ElevateU combines personalized artificial intelligence with real-world expertise to help students
                confidently navigate their academic and professional journeys—from high school to career.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1.5 group">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] animate-float">
                <Image
                  src="/placeholder.svg?height=450&width=450"
                  alt="AI Career Counseling"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 text-center md:mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose ElevateU?</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Our AI-powered platform provides personalized guidance to help you achieve your academic and career goals.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div className="flex flex-col items-center text-center group transition-transform hover:scale-105">
              <div className="mb-4 rounded-full bg-primary/10 p-4 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <BookOpen className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Personalized AI Guidance</h3>
              <p className="text-muted-foreground">
                Tailored college and career paths based on your individual profile, strengths, and aspirations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group transition-transform hover:scale-105">
              <div className="mb-4 rounded-full bg-primary/10 p-4 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <Clock className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold">24/7 AI Counselor</h3>
              <p className="text-muted-foreground">
                Your virtual counselor available anytime, providing intelligent and supportive advice.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group transition-transform hover:scale-105">
              <div className="mb-4 rounded-full bg-primary/10 p-4 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <Users className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Real-World Mentorship</h3>
              <p className="text-muted-foreground">
                Connect seamlessly with experienced mentors and successful alumni from top universities, including NYU.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 text-center md:mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Powerful Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our AI-Powered Tools</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Discover how ElevateU can transform your educational and career journey with cutting-edge AI technology.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<BrainCircuit className="h-6 w-6" />}
              title="AI Career & College Roadmap"
              description="Instantly creates a customized academic and professional pathway."
              details="Our AI analyzes your strengths, interests, and goals to generate a personalized roadmap that outlines key milestones, recommended courses, and potential career paths. The roadmap adapts as you progress, providing real-time guidance at every step."
            />
            <FeatureCard
              icon={<FileEdit className="h-6 w-6" />}
              title="Smart Application Assistant"
              description="Offers personalized essay critiques and application advice."
              details="Get AI-powered feedback on your college application essays, personal statements, and interview responses. Our system analyzes successful applications to top universities and provides specific recommendations to strengthen your materials and highlight your unique qualities."
            />
            <FeatureCard
              icon={<UserPlus className="h-6 w-6" />}
              title="AI Mentorship Match"
              description="Connects students to relevant professionals and alumni mentors."
              details="Our sophisticated matching algorithm pairs you with mentors who share your interests, career goals, and background. Connect with NYU alumni and industry professionals who can provide invaluable guidance, networking opportunities, and insider knowledge about your chosen field."
            />
            <FeatureCard
              icon={<Search className="h-6 w-6" />}
              title="Scholarship Finder"
              description="AI-driven recommendations for scholarships and opportunities."
              details="Stop spending hours searching for scholarships. Our AI continuously scans thousands of opportunities and matches you with scholarships, grants, internships, and extracurricular activities that align with your profile, increasing your chances of acceptance and financial support."
            />
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="AI Chatbot Counselor"
              description="Available 24/7 to answer questions and provide guidance."
              details="Our advanced AI chatbot uses natural language processing to understand your questions and provide personalized, accurate responses about college admissions, career planning, financial aid, and more. Get instant answers whenever you need them, day or night."
            />
            <FeatureCard
              icon={<BookMarked className="h-6 w-6" />}
              title="Personalized Study Plans"
              description="Custom study schedules tailored to your learning style."
              details="Our AI analyzes your learning preferences, academic strengths, and schedule to create optimized study plans that maximize retention and efficiency. Receive customized resources, practice materials, and time management strategies to excel in your courses."
            />
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 text-center md:mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hear From Our Students</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Discover how ElevateU has helped students achieve their academic and career goals.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 text-center md:mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Find answers to common questions about ElevateU and our services.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion
              items={[
                {
                  question: "How does ElevateU's AI counseling work?",
                  answer:
                    "ElevateU uses advanced artificial intelligence to analyze your academic history, interests, strengths, and goals. Our AI creates personalized recommendations for colleges, majors, and career paths based on this data, while continuously learning and adapting to provide increasingly accurate guidance as you use the platform.",
                },
                {
                  question: "Can ElevateU help with scholarship applications?",
                  answer:
                    "Our AI Scholarship Finder scans thousands of opportunities and matches you with scholarships that align with your profile. We also provide guidance on application materials, deadlines, and strategies to maximize your chances of receiving financial aid.",
                },
                {
                  question: "How does the mentorship matching process work?",
                  answer:
                    "Our AI analyzes your profile, interests, and career goals to match you with compatible mentors from our network of professionals and NYU alumni. You can browse mentor profiles, request connections, and schedule virtual meetings through our platform. Mentors provide personalized advice, industry insights, and networking opportunities.",
                },
                {
                  question: "Is ElevateU only for students applying to NYU?",
                  answer:
                    "No, ElevateU is designed for all students, regardless of which colleges they're interested in. While we have strong connections with NYU alumni and resources, our platform provides guidance for applications to any college or university, and career planning for any industry.",
                },
                {
                  question: "How much does ElevateU cost?",
                  answer:
                    "ElevateU offers several subscription tiers to meet different needs and budgets. We have a free trial option with basic features, as well as Premium and Elite plans with more comprehensive services. Visit our Pricing page for detailed information on each plan's features and costs.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="container">
          <div className="mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Elevate Your Future?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-primary-foreground/80 md:text-xl">
              Join thousands of students who have transformed their academic and career paths with ElevateU.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

