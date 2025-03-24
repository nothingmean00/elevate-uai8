import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  name: string
  description: string
  price: string
  duration: string
  features: PricingFeature[]
  popular?: boolean
  buttonText: string
  buttonVariant?: "default" | "outline" | "secondary"
}

export function PricingCard({
  name,
  description,
  price,
  duration,
  features,
  popular = false,
  buttonText,
  buttonVariant = "default",
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col ${popular ? "border-primary shadow-lg scale-105" : ""}`}>
      {popular && (
        <div className="py-1 px-4 bg-primary text-primary-foreground text-xs font-medium text-center rounded-t-lg">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground">/{duration}</span>
        </div>
        <ul className="grid gap-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.included ? (
                <>
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature.text}</span>
                </>
              ) : (
                <>
                  <div className="h-4 w-4" />
                  <span className="text-muted-foreground line-through">{feature.text}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto pt-4">
        <Button variant={buttonVariant} className="w-full">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}

