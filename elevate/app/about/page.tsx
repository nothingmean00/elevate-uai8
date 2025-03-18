import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            About Us
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About ElevateU</h1>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Our mission is to revolutionize educational and career counseling by combining cutting-edge AI technology
            with real human expertise—empowering every student to achieve their fullest potential.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                ElevateU was founded in 2022 by a team of NYU alumni who recognized the challenges students face when
                navigating their educational and career journeys. With backgrounds in education, technology, and career
                counseling, our founders set out to create a platform that would democratize access to high-quality
                guidance.
              </p>
              <p className="text-muted-foreground">
                By leveraging the power of artificial intelligence and machine learning, we've developed a system that
                provides personalized, data-driven recommendations while maintaining the human touch that's essential
                for meaningful guidance.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="ElevateU Team" fill className="object-cover" />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Our Mission" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At ElevateU, we believe that every student deserves access to high-quality educational and career
                guidance, regardless of their background or resources. Our mission is to level the playing field by
                providing AI-powered counseling that adapts to each student's unique needs and circumstances.
              </p>
              <p className="text-muted-foreground">
                We're committed to helping students make informed decisions about their education and careers,
                connecting them with mentors who can provide real-world insights, and empowering them to pursue
                opportunities that align with their passions and strengths.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Our Core Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what's possible with AI to provide the most effective guidance.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We're committed to making quality guidance accessible to students from all backgrounds.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-bold mb-2">Personalization</h3>
                <p className="text-muted-foreground">
                  We recognize that each student's journey is unique and tailor our guidance accordingly.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of ethics and privacy in all our interactions.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Meet Our Team</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Team Member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Dr. Sarah Chen</h3>
                <p className="text-primary">Co-Founder & CEO</p>
                <p className="text-muted-foreground mt-2">Ph.D. in Education, NYU Steinhardt</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Team Member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                <p className="text-primary">Co-Founder & CTO</p>
                <p className="text-muted-foreground mt-2">M.S. in Computer Science, NYU Tandon</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Team Member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Aisha Johnson</h3>
                <p className="text-primary">Head of Career Services</p>
                <p className="text-muted-foreground mt-2">MBA, NYU Stern School of Business</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

