import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { BrainCircuit, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">ElevateU</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Have questions? Get in touch with our team and we'll be happy to help.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <address className="not-italic text-muted-foreground">
                      <p>New York University</p>
                      <p>70 Washington Square South</p>
                      <p>New York, NY 10012</p>
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-muted-foreground">info@elevateu.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-muted-foreground">(212) 555-1234</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/">Return Home</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted">
        <div className="container py-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ElevateU. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

