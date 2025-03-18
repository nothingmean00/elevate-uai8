"use client";

import { useState } from "react";
import { Search, FileEdit, BookOpen } from "lucide-react";

export type AccordionItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function FeaturesAccordion() {
  const features: AccordionItem[] = [
    {
      id: 1,
      title: "Unlimited SAT Practice",
      description:
        "Master the SAT with AI-generated questions tailored to your weaknesses. Practice endlessly to build confidence and improve scores.",
      icon: <Search className="h-8 w-8 text-[#5E3CB3]" />,
    },
    {
      id: 2,
      title: "Data-Driven University Insights",
      description:
        "Receive personalized college recommendations backed by comprehensive university data to ensure the best-fit options for your academic journey.",
      icon: <FileEdit className="h-8 w-8 text-[#5E3CB3]" />,
    },
    {
      id: 3,
      title: "Tailored Essay Guidance",
      description:
        "Craft compelling essays with AI assistance that highlights your strengths and aligns with each university's criteria.",
      icon: <BookOpen className="h-8 w-8 text-[#5E3CB3]" />,
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {features.map((feature) => (
        <div key={feature.id} className="border rounded-xl overflow-hidden">
          <button
            onClick={() => toggleAccordion(feature.id)}
            className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-white to-[#F4F4F7] hover:bg-[#E6E6FA] transition-colors"
            aria-expanded={activeId === feature.id}
            aria-controls={`content-${feature.id}`}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#5E3CB3]/10 rounded-full">{feature.icon}</div>
              <span className="text-xl font-bold text-[#2A2D43]">{feature.title}</span>
            </div>
            <span className="text-2xl text-[#5E3CB3]">
              {activeId === feature.id ? "−" : "+"}
            </span>
          </button>
          <div 
            id={`content-${feature.id}`}
            className={`transition-all duration-300 overflow-hidden ${
              activeId === feature.id ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="px-6 py-4 bg-white">
              <p className="text-base text-[#4A4A4A]">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 