"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs?: FAQItem[]
  items?: FAQItem[]
  className?: string
}

export function FAQAccordion({ faqs, items, className = '' }: FAQAccordionProps) {
  // Use items prop if provided, otherwise use faqs prop, or default to empty array
  const faqItems = items || faqs || [];
  
  return (
    <Accordion type="single" collapsible className={className}>
      {faqItems.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FAQAccordion

