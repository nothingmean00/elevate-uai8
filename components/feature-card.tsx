"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  details?: string  // Made optional to resolve the build error
}

export function FeatureCard({ icon, title, description, details }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      role="region"
      aria-labelledby={`feature-${title}`}
    >
      <CardHeader className="pb-2">
        <div className="mb-2 text-primary">{icon}</div>
        <CardTitle id={`feature-${title}`} className="text-xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
        {details && (
          <motion.div
            id={`feature-details-${title}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-sm overflow-hidden"
          >
            {details}
          </motion.div>
        )}
      </CardContent>
      {details && (
        <CardFooter>
          <Button
            variant="ghost"
            className="p-0 h-auto text-primary font-medium flex items-center gap-1 hover:bg-transparent hover:text-primary/80"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={`feature-details-${title}`}
          >
            {isExpanded ? "Show less" : "Learn more"}
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-300 ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
