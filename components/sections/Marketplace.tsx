"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Store, CheckCircle, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Marketplace() {
  const [requested, setRequested] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setRequested(true);
    }
  };

  return (
    <section className="border-t border-border bg-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent">
            <Sparkles className="h-4 w-4" />
            Coming Soon
          </div>
          <h2 className="text-h1 mb-4">Marketplace</h2>
          <p className="text-body mx-auto max-w-2xl text-muted-foreground">
            Verified vendors, premium templates, sponsored placements, and lead capture for
            AI products.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Claim Listing */}
            <Card>
              <div className="mb-4 flex items-center gap-2">
                <Store className="h-5 w-5 text-accent" />
                <h3 className="text-h2">Claim Your Listing</h3>
              </div>
              <p className="text-body mb-6 text-muted-foreground">
                Get your product featured in UniAI's marketplace. Verified vendors get priority
                placement and analytics.
              </p>
              <ul className="mb-6 space-y-2 text-body text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Verified badge
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Analytics dashboard
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Lead capture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Sponsored placements
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>

            {/* Request Demo */}
            <Card>
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <h3 className="text-h2">Request a Demo</h3>
              </div>
              <p className="text-body mb-6 text-muted-foreground">
                See how the marketplace works and get early access when it launches.
              </p>
              {!requested ? (
                <form onSubmit={handleRequest} className="space-y-4">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-body outline-none focus:border-accent"
                    required
                  />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-body outline-none focus:border-accent"
                    required
                  />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company (optional)"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-body outline-none focus:border-accent"
                  />
                  <Button variant="primary" type="submit" className="w-full">
                    Request Demo
                  </Button>
                </form>
              ) : (
                <div className="rounded-lg bg-accent/10 p-6 text-center">
                  <CheckCircle className="mx-auto mb-3 h-8 w-8 text-accent" />
                  <p className="text-body font-medium text-accent">Request Received!</p>
                  <p className="text-caption mt-2 text-muted-foreground">
                    We'll be in touch soon with more details.
                  </p>
                </div>
              )}
            </Card>
          </div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card>
              <h3 className="text-h2 mb-6 text-center">What's Coming</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Store className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-h3 mb-2">Verified Vendors</h4>
                  <p className="text-caption text-muted-foreground">
                    Trusted vendors with verified credentials and reviews
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-h3 mb-2">Premium Templates</h4>
                  <p className="text-caption text-muted-foreground">
                    Curated, paid templates from expert builders
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-h3 mb-2">Lead Capture</h4>
                  <p className="text-caption text-muted-foreground">
                    Built-in lead generation and analytics for vendors
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

