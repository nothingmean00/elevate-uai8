import { BookOpen, Clock, Users, Search } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// FadeInSection Component: Fades and slides in content when scrolled into view
function FadeInSection({ children }: { children: React.ReactNode }) {
  const domRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: "0ms" }}
      className={`transition-all duration-700 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

export default function HowElevateUWorks() {
  // Define the steps for the process.
  const steps = [
    {
      title: "Sign Up",
      description:
        "Create a secure account and tell us your academic interests. Our system gets to know your goals from the start.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "Get Assessed",
      description:
        "Take an initial quiz or upload your test scores to help our AI create your baseline roadmap.",
      icon: <Search className="h-6 w-6 text-white" />,
    },
    {
      title: "Build Your Plan",
      description:
        "Unlock a step-by-step action plan featuring unlimited SAT practice, targeted essay prompts, and mentor check-ins.",
      icon: <BookOpen className="h-6 w-6 text-white" />,
    },
    {
      title: "Track & Adapt",
      description:
        "Monitor progress, discover new scholarship leads, and let our AI fine-tune your strategy as you learn.",
      icon: <Clock className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section className="relative py-16 bg-[#A2FFD2]/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A2D43]">
              How ElevateU Works
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-[#4A4A4A] leading-relaxed">
              Follow our simple four-step process to receive AI-driven advice, craft stand-out applications, and reach your college goals.
            </p>
          </div>
        </FadeInSection>

        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row items-center md:justify-between">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <FadeInSection key={index}>
                <div className="relative z-10 flex md:flex-1 flex-col items-center mb-10 md:mb-0 md:px-4 transition-transform duration-300 hover:scale-105">
                  {/* Step Circle with Icon and Number Badge */}
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#5E3CB3] mb-3 hover:animate-bounce-pop">
                    {step.icon}
                    <span className="absolute -bottom-1 -right-2 text-xs font-bold text-[#2A2D43] bg-white rounded-full px-1">
                      {index + 1}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-[#2A2D43] text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-center text-[#4A4A4A] max-w-xs mx-auto leading-relaxed">
                    {step.description}
                  </p>

                  {/* Vertical connector line for mobile */}
                  {!isLast && (
                    <div className="md:hidden block my-6">
                      <div className="w-1 bg-[#5E3CB3] animate-growLine" style={{ height: "2rem" }}></div>
                    </div>
                  )}
                </div>
              </FadeInSection>
            );
          })}
        </div>

        {/* Final Call-to-Action */}
        <FadeInSection>
          <div className="text-center mt-12">
            <h4 className="text-2xl font-semibold text-[#2A2D43] mb-2">
              Ready to begin your journey?
            </h4>
            <Link href="/signup">
              <a className="inline-block bg-[#5E3CB3] text-white px-6 py-3 rounded hover:bg-[#4D2D9B] transition pulse-glow">
                Create an Account
              </a>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
