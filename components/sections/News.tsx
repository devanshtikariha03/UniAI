"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { newsItems } from "@/data/sampleData";

const filters = [
  "All",
  "Frameworks",
  "Evals",
  "Safety",
  "Observability",
  "Deployments",
];

export function News() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredNews =
    activeFilter === "All"
      ? newsItems
      : newsItems.filter((item) => item.tag === activeFilter);

  return (
    <section className="border-t border-border bg-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-h1 mb-4">AI News</h2>
          <p className="text-body mx-auto max-w-2xl text-muted-foreground">
            Stay updated with the latest developments in AI.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-accent text-white shadow-lg shadow-accent/30"
                  : "bg-background text-foreground/70 hover:bg-muted hover:text-foreground"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* News Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Card hover>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-caption text-muted-foreground">{item.date}</span>
                    <Tag variant="accent" size="sm">
                      {item.tag}
                    </Tag>
                  </div>
                  <h3 className="text-h3 mb-3">{item.title}</h3>
                  <p className="text-body mb-4 text-muted-foreground">{item.summary}</p>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-caption mb-1 font-semibold">Why it matters:</p>
                    <p className="text-caption text-muted-foreground">{item.whyItMatters}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
