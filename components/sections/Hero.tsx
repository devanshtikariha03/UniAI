"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const searchQueries = [
  "best AI evaluation stack for tool-calling",
  "production guardrails for AI systems",
  "observability tools for AI systems",
];

export function Hero() {
  const [currentQuery, setCurrentQuery] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const query = searchQueries[currentQuery];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < query.length) {
      timeout = setTimeout(() => {
        setDisplayText(query.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === query.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(query.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentQuery((prev) => (prev + 1) % searchQueries.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentQuery]);

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-muted/10 to-muted/20 py-24 sm:py-32">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(107, 122, 232, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(107, 122, 232, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(107, 122, 232, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-hero mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
          >
            UniAI: the homebase for AI builders.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-h3 mb-12 text-muted-foreground"
          >
            Discover tools, track news, compare stacks, share templates, and ship AI products safely.
          </motion.p>

          {/* Live Search Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative mx-auto max-w-2xl">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex items-center rounded-xl border border-border bg-background p-4 shadow-lg backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Search className="mr-3 h-5 w-5 text-muted-foreground" />
                </motion.div>
                <input
                  type="text"
                  value={displayText}
                  readOnly
                  className="flex-1 bg-transparent text-body outline-none"
                  placeholder="Search UniAI..."
                />
                <motion.span
                  className="ml-2 h-5 w-0.5 bg-accent"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>

              {/* Answer Preview */}
              {displayText.length > 20 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-lg border border-border bg-background p-6 text-left shadow-lg"
                >
                  <p className="text-body mb-4">
                    For tool-calling AI evaluation, consider <strong>EvalBench</strong> for
                    comprehensive testing, <strong>TraceWatch</strong> for observability, and{" "}
                    <strong>GuardrailKit</strong> for safety. These tools integrate well together.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-md bg-accent/10 px-3 py-1 text-sm text-accent">
                      EvalBench
                    </span>
                    <span className="rounded-md bg-accent/10 px-3 py-1 text-sm text-accent">
                      TraceWatch
                    </span>
                    <span className="rounded-md bg-accent/10 px-3 py-1 text-sm text-accent">
                      GuardrailKit
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Compare Tools
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/explore">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Explore the library
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/waitlist">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Join the waitlist
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

