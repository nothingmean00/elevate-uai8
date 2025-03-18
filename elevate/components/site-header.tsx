import Link from "next/link"
import { BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 overflow-hidden group-hover:bg-primary/20 transition-colors">
              <BrainCircuit className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 border border-primary/20 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary leading-none">ElevateU</span>
              <span className="text-[10px] text-muted-foreground leading-tight">AI CAREER COUNSELOR</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/success-stories" className="text-sm font-medium transition-colors hover:text-primary">
            Success Stories
          </Link>
          <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-primary">
            Log In
          </Link>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

