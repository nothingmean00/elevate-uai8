"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log("Notifying email:", email);
    setSubmitted(true);
    setError("");
  };

  return (
    <div className="container py-12 md:py-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Sign Up
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          We're not currently accepting new users, but we'll notify you when we do.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-md">
        {submitted ? (
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <h2 className="text-xl font-bold text-green-700 mb-2">Thank You!</h2>
            <p className="text-green-600">
              We've received your email. We'll notify you as soon as we start accepting new users.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
              {error && (
                <p className="mt-1 text-xs text-red-600">{error}</p>
              )}
            </div>
            <div>
              <Button type="submit" variant="default" className="w-full">
                Notify Me
              </Button>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
