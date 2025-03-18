import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function SuccessStoriesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Success Stories
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Student Success Stories</h1>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Read about how ElevateU has helped students achieve their academic and career goals through personalized AI
            guidance and mentorship.
          </p>
        </div>

        <div className="grid gap-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Alex Johnson</h2>
              <p className="text-primary font-medium mb-2">
                Computer Science Student, NYU Tandon School of Engineering
              </p>
              <div className="mb-4 text-muted-foreground">
                <p className="mb-4">
                  "Before ElevateU, I was struggling to decide between several different career paths in tech. The AI
                  Career Roadmap helped me identify my strengths in software architecture and connected me with an NYU
                  alumni mentor who guided me through internship applications."
                </p>
                <p>
                  "Thanks to ElevateU's guidance, I secured an internship at a leading tech company, which later turned
                  into a full-time job offer. The personalized study plans also helped me maintain a 3.9 GPA while
                  balancing my coursework and internship."
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary font-bold">Result:</div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Secured dream tech internship
                </div>
              </div>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=700&width=500" alt="Alex Johnson" fill className="object-cover" />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[350px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=700&width=500" alt="Sophia Chen" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Sophia Chen</h2>
              <p className="text-primary font-medium mb-2">Pre-Med Student, NYU College of Arts & Science</p>
              <div className="mb-4 text-muted-foreground">
                <p className="mb-4">
                  "As a first-generation college student, I had limited resources for guidance on my pre-med journey.
                  ElevateU's Scholarship Finder helped me secure a prestigious research grant that covered 50% of my
                  tuition."
                </p>
                <p>
                  "The AI Chatbot Counselor was available whenever I had questions about course selection or medical
                  school requirements. The personalized study plans were crucial for helping me balance my challenging
                  course load while maintaining research commitments."
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary font-bold">Result:</div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Secured 50% tuition scholarship
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Marcus Williams</h2>
              <p className="text-primary font-medium mb-2">
                Business Administration Student, NYU Stern School of Business
              </p>
              <div className="mb-4 text-muted-foreground">
                <p className="mb-4">
                  "As a first-generation college student, I had no idea how to navigate the application process.
                  ElevateU's Smart Application Assistant helped me craft compelling essays that got me accepted to my
                  top-choice schools."
                </p>
                <p>
                  "The AI Mentorship Match connected me with a successful entrepreneur who has become an invaluable
                  mentor. Their guidance helped me launch my own small business during my sophomore year, which has
                  already started generating revenue."
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary font-bold">Result:</div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Launched successful business
                </div>
              </div>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=700&width=500" alt="Marcus Williams" fill className="object-cover" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-none shadow-none bg-muted">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <Quote className="h-6 w-6" />
                </div>
                <blockquote className="mb-4 text-muted-foreground">
                  "ElevateU helped me identify scholarships I never would have found on my own. I received over $15,000
                  in financial aid!"
                </blockquote>
                <div className="font-medium">Jamie Rodriguez</div>
                <div className="text-sm text-muted-foreground">Engineering Student</div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-muted">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <Quote className="h-6 w-6" />
                </div>
                <blockquote className="mb-4 text-muted-foreground">
                  "The AI Chatbot answered all my questions about college applications at 2 AM when I was stressing
                  about deadlines."
                </blockquote>
                <div className="font-medium">Taylor Kim</div>
                <div className="text-sm text-muted-foreground">High School Senior</div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-muted">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <Quote className="h-6 w-6" />
                </div>
                <blockquote className="mb-4 text-muted-foreground">
                  "My mentor helped me navigate the finance industry and prepare for interviews. I landed my dream job
                  at a top investment firm!"
                </blockquote>
                <div className="font-medium">Jordan Patel</div>
                <div className="text-sm text-muted-foreground">Finance Graduate</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/signup">Start Your Success Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

