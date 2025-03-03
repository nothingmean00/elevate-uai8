import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BrainCircuit, FileEdit, UserPlus, Search, MessageSquare, BookMarked, ArrowRight } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Features
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">AI-Powered Tools</h1>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Discover how ElevateU can transform your educational and career journey with our comprehensive suite of
            AI-powered tools and resources.
          </p>
        </div>

        <div className="grid gap-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">AI Career & College Roadmap</h2>
              <p className="text-muted-foreground mb-4">
                Our AI analyzes your strengths, interests, and goals to generate a personalized roadmap that outlines
                key milestones, recommended courses, and potential career paths. The roadmap adapts as you progress,
                providing real-time guidance at every step.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalized academic and career planning based on your unique profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Dynamic adjustments as your interests and goals evolve</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Visualization of multiple potential pathways to help with decision-making</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-8 border">
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
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="order-2 md:order-1 bg-muted rounded-lg p-8 border">
              <div className="space-y-4">
                <div className="h-32 w-full bg-primary/10 rounded-lg"></div>
                <div className="h-4 w-3/4 bg-primary/20 rounded mt-6"></div>
                <div className="h-4 w-full bg-primary/20 rounded"></div>
                <div className="h-4 w-5/6 bg-primary/20 rounded"></div>
                <div className="h-8 w-1/3 bg-primary/30 rounded mt-4"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <FileEdit className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Smart Application Assistant</h2>
              <p className="text-muted-foreground mb-4">
                Get AI-powered feedback on your college application essays, personal statements, and interview
                responses. Our system analyzes successful applications to top universities and provides specific
                recommendations to strengthen your materials and highlight your unique qualities.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Real-time essay feedback with specific improvement suggestions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Interview preparation with practice questions and response analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Application strategy recommendations based on your target schools</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <UserPlus className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">AI Mentorship Match</h2>
              <p className="text-muted-foreground mb-4">
                Our sophisticated matching algorithm pairs you with mentors who share your interests, career goals, and
                background. Connect with NYU alumni and industry professionals who can provide invaluable guidance,
                networking opportunities, and insider knowledge about your chosen field.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalized mentor matching based on your specific goals and interests</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Virtual meeting scheduling and relationship management tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Access to a diverse network of professionals across various industries</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-8 border">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-1/2 bg-primary/20 rounded"></div>
                    <div className="h-3 w-3/4 bg-primary/10 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-2/3 bg-primary/20 rounded"></div>
                    <div className="h-3 w-3/4 bg-primary/10 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-1/2 bg-primary/20 rounded"></div>
                    <div className="h-3 w-3/4 bg-primary/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="border rounded-lg p-6 bg-card">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mb-4">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scholarship Finder</h3>
              <p className="text-muted-foreground">
                Our AI continuously scans thousands of opportunities and matches you with scholarships, grants,
                internships, and extracurricular activities that align with your profile, increasing your chances of
                acceptance and financial support.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-card">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mb-4">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Chatbot Counselor</h3>
              <p className="text-muted-foreground">
                Our advanced AI chatbot uses natural language processing to understand your questions and provide
                personalized, accurate responses about college admissions, career planning, financial aid, and more. Get
                instant answers whenever you need them.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-card">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mb-4">
                <BookMarked className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Study Plans</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your learning preferences, academic strengths, and schedule to create optimized study
                plans that maximize retention and efficiency. Receive customized resources, practice materials, and time
                management strategies.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

