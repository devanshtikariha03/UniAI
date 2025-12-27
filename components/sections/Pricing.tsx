"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring and getting started",
    features: [
      "Browse all tools and projects",
      "Search across platform",
      "Read community discussions",
      "Access public templates",
      "View news and content",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious builders and teams",
    features: [
      "Everything in Free",
      "Save tools to collections",
      "Advanced comparison features",
      "Priority support",
      "Early access to new features",
      "Export collections",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Shared collections",
      "Team admin dashboard",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="border-t border-border bg-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-h1 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-body mx-auto max-w-2xl text-muted-foreground">
            Choose the plan that works for you. All plans include access to the core platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative ${plan.popular ? "border-2 border-accent shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-accent px-4 py-1 text-sm font-medium text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-h2 mb-2">{plan.name}</h3>
                  <div className="mb-2 flex items-baseline gap-1">
                    <span className="text-h1">{plan.price}</span>
                    {plan.period && (
                      <span className="text-body text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-caption text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-body text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-caption text-muted-foreground">
          All plans are illustrative. Pricing may change before launch.
        </p>
      </div>
    </section>
  );
}

