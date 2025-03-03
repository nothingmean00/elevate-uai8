"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  school: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Computer Science Student",
    school: "NYU Tandon School of Engineering",
    quote:
      "ElevateU's AI counselor helped me map out my entire academic journey and connected me with an NYU alumni mentor who guided me through internship applications. I landed my dream role at a top tech company!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Pre-Med Student",
    school: "NYU College of Arts & Science",
    quote:
      "The personalized study plans and scholarship finder saved me countless hours of research. ElevateU helped me secure a prestigious research position and a scholarship that covered 50% of my tuition.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Business Administration Student",
    school: "NYU Stern School of Business",
    quote:
      "As a first-generation college student, I had no idea how to navigate the application process. ElevateU's application assistant helped me craft compelling essays that got me accepted to my top-choice schools.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [autoplay]) //Fixed useEffect dependency

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 border-none shadow-none bg-transparent">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-6 rounded-full bg-primary/10 p-3 text-primary">
                  <Quote className="h-8 w-8" />
                </div>
                <blockquote className="mb-6 text-lg italic">"{testimonial.quote}"</blockquote>
                <div className="flex flex-col items-center">
                  <div className="relative h-16 w-16 mb-3 overflow-hidden rounded-full border-2 border-primary">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.school}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prev}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`w-2 h-2 p-0 rounded-full ${index === current ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" className="rounded-full" onClick={next}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

