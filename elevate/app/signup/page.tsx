import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Sign Up</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Create your ElevateU account and start your journey to academic and career success.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

