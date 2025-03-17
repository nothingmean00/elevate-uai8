"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/pricing-card";
import { BrainCircuit } from "lucide-react";
import { FAQAccordion } from "@/components/faq-accordion";
import SiteFooter from "@/components/site-footer";

export default function PricingPage() {
  // Toggle between monthly/yearly
  const [isAnnual, setIsAnnual] = useState(false);

  // Optional JSON-LD for each plan
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Product",
        name: "Free Trial",
        description: "Perfect for exploring ElevateU's basic features",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        position: 1,
      },
      {
        "@type": "Product",
        name: "Premium",
        description: "Comprehensive AI-powered counseling for serious students",
        offers: {
          "@type": "Offer",
          price: isAnnual ? "278" : "29", // monthly 29 => annual ~29*12=348 but with discount
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        position: 2,
      },
      {
        "@type": "Product",
        name: "Elite",
        description: "The ultimate package for academic and career success",
        offers: {
          "@type": "Offer",
          price: isAnnual ? "758" : "79",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        position: 3,
      },
    ],
  };

  // Adjust prices dynamically
  const premiumPrice = isAnnual ? "$278" : "$29";
  const elitePrice = isAnnual ? "$758" : "$79";
  const premiumDuration = isAnnual ? "year" : "month";
  const eliteDuration = isAnnual ? "year" : "month";

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>ElevateU Pricing & Plans - Simple & Transparent</title>
        <meta
          name="description"
          content="Choose the best plan for your AI-driven college and career counseling. Our Free, Premium, and Elite plans offer flexible options for every student's budget."
        />
        {/* Product / Offer JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>

      {/* The header with the ElevateU branding has been removed since a header component already exists */}

      <main className="flex-1">
        <div className="container py-12 md:py-24">
          <div className="mx-auto mb-12 text-center md:mb-16 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto mt-4 text-muted-foreground md:text-xl">
              Choose the plan that's right for you and start your journey with ElevateU.
              Switch anytime between monthly or annual billing.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* FREE TRIAL PLAN */}
            <PricingCard
              name="Free Trial"
              description="Perfect for exploring ElevateU's basic features"
              price="$0"
              duration="month"
              features={[
                { text: "Basic AI assessment", included: true },
                { text: "Limited chatbot usage (10 queries/day)", included: true },
                { text: "College recommendation engine", included: true },
                { text: "Basic career path suggestions", included: true },
                { text: "Personalized mentorship matching", included: false },
                { text: "Advanced application assistance", included: false },
                { text: "Unlimited AI counselor access", included: false },
              ]}
              buttonText="Start Free Trial"
              buttonVariant="outline"
            />

            {/* PREMIUM PLAN */}
            <PricingCard
              name="Premium"
              description="Comprehensive AI-powered counseling for serious students"
              price={premiumPrice}
              duration={premiumDuration}
              popular={true}
              features={[
                { text: "Comprehensive AI assessment", included: true },
                { text: "Unlimited chatbot usage", included: true },
                { text: "Advanced college recommendations", included: true },
                { text: "Detailed career path planning", included: true },
                { text: "Personalized study plans", included: true },
                { text: "Application essay feedback", included: true },
                { text: "Personal mentor matching", included: false },
              ]}
              buttonText="Get Started"
            />

            {/* ELITE PLAN */}
            <PricingCard
              name="Elite"
              description="The ultimate package for academic and career success"
              price={elitePrice}
              duration={eliteDuration}
              features={[
                { text: "All Premium features", included: true },
                { text: "Personal mentor matching", included: true },
                { text: "Human expert consultations", included: true },
                { text: "Advanced application essay coaching", included: true },
                { text: "Interview preparation sessions", included: true },
                { text: "Scholarship application assistance", included: true },
                { text: "Priority support", included: true },
              ]}
              buttonText="Upgrade to Elite"
              buttonVariant="secondary"
            />
          </div>

          {/* Mid-Scroll CTA */}
          <div className="mt-16 bg-primary/10 p-6 rounded text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-primary">Need More Info?</h2>
            <p className="text-muted-foreground mb-4">
              Visit our <Link href="/features" className="underline">Features</Link> page or
              read student success stories to see how we can help you achieve your goals.
            </p>
            <Button asChild variant="default">
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="mx-auto mb-8 text-center max-w-3xl">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-2 text-muted-foreground">
                Find answers to common questions about our pricing and plans.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <FAQAccordion
                items={[
                  {
                    question: "Can I switch between plans?",
                    answer:
                      "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the start of your next billing cycle.",
                  },
                  {
                    question: "Is there a discount for annual billing?",
                    answer:
                      "Yes, we offer a 20% discount when you choose annual billing for any of our paid plans. This option is available during signup or can be changed in your account settings.",
                  },
                  {
                    question: "Do you offer special pricing for schools or groups?",
                    answer:
                      "Yes, we offer special pricing for educational institutions and groups of 10 or more students. Please contact our sales team at sales@elevateu.com for more information.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. For school or institutional billing, we can also arrange for purchase orders and invoicing.",
                  },
                  {
                    question: "Can I get a refund if I'm not satisfied?",
                    answer:
                      "We offer a 14-day money-back guarantee for all new subscriptions. If you're not completely satisfied with our service, contact our support team within 14 days of your initial purchase for a full refund.",
                  },
                ]}
              />
            </div>
          </div>

          {/* Return Home */}
          <div className="mt-16 text-center">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
