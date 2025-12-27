"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-16">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-h1 mb-6">Join the Waitlist</h1>
          <p className="text-h3 mb-12 text-muted-foreground">
            Be among the first to access UniAI when we launch.
          </p>
        </motion.div>

        <Card>
          {!submitted ? (
            <>
              <h2 className="text-h2 mb-4">Get Early Access</h2>
              <p className="text-body mb-6 text-muted-foreground">
                Sign up to be notified when UniAI launches. Early access members will get priority
                access and special perks.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-body outline-none focus:border-accent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-body outline-none focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="mb-2 block text-sm font-medium">
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-body outline-none focus:border-accent"
                    placeholder="e.g., Agent Engineer, AI Researcher"
                  />
                </div>
                <Button variant="primary" size="lg" type="submit" className="w-full">
                  Join Waitlist
                </Button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
              <h2 className="text-h2 mb-4">You're on the list!</h2>
              <p className="text-body mb-6 text-muted-foreground">
                We'll send you an email when UniAI launches. In the meantime, feel free to explore
                our preview content.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a href="/">
                  <Button variant="primary">Explore Preview</Button>
                </a>
                <a href="/about#contact">
                  <Button variant="outline">Contact Us</Button>
                </a>
              </div>
            </motion.div>
          )}
        </Card>

        <div className="mt-12 text-center">
          <p className="text-caption text-muted-foreground">
            By joining, you agree to receive updates about UniAI. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}

