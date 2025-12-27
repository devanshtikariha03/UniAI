"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";

const testimonials = [
  {
    id: "1",
    quote:
      "UniAI has become my go-to resource for discovering new tools and staying updated. The comparison feature saved me weeks of research.",
    author: "Alex Chen",
    role: "Senior Agent Engineer",
    company: "AI Innovations",
  },
  {
    id: "2",
    quote:
      "The community discussions are incredibly valuable. I've learned so much from other builders sharing their production experiences.",
    author: "Sarah Kim",
    role: "AI Researcher",
    company: "TechCorp",
  },
  {
    id: "3",
    quote:
      "As a team lead, UniAI helps us evaluate and compare tools quickly. The templates section is a goldmine for getting started.",
    author: "Maya Patel",
    role: "Engineering Manager",
    company: "StartupAI",
  },
];

const logos = ["Company A", "Company B", "Company C", "Company D"];

export function SocialProof() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-h1 mb-4">Trusted by Builders</h2>
          <p className="text-body mx-auto max-w-2xl text-muted-foreground">
            Join thousands of AI builders using UniAI to ship better AI products.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <Quote className="mb-4 h-8 w-8 text-accent/30" />
                <p className="text-body mb-6 text-muted-foreground">{testimonial.quote}</p>
                <div>
                  <p className="text-body font-semibold">{testimonial.author}</p>
                  <p className="text-caption text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <div className="border-t border-border pt-12">
          <p className="mb-8 text-center text-caption text-muted-foreground">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-h3 font-bold text-muted-foreground"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

