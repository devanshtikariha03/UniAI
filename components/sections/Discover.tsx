"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Check, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { tools } from "@/data/sampleData";
import type { Tool } from "@/data/sampleData";

export function Discover() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-h1 mb-4">Discover AI Products & Projects</h2>
          <p className="text-body mx-auto max-w-2xl text-muted-foreground">
            Explore the ecosystem of tools, frameworks, and projects built for AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Card hover onClick={() => setSelectedTool(tool)}>
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-h3">{tool.name}</h3>
                  {tool.website && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <p className="text-caption mb-4 text-muted-foreground">{tool.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {tool.tags.slice(0, 2).map((tag) => (
                    <Tag key={tag} variant="muted" size="sm">
                      {tag}
                    </Tag>
                  ))}
                </div>
                <div className="space-y-2 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pricing:</span>
                    <span className="font-medium">{tool.pricing}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Best for:</span>
                    <span className="font-medium">{tool.bestFor}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Stack fit:</span>
                    <span className="font-medium">{tool.stackFit}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tool Modal */}
        {selectedTool && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-background p-8 shadow-2xl"
            >
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-h1 mb-2">{selectedTool.name}</h3>
                  <p className="text-body text-muted-foreground">{selectedTool.description}</p>
                </div>
                <button
                  onClick={() => setSelectedTool(null)}
                  className="rounded-lg p-2 hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {selectedTool.tags.map((tag) => (
                  <Tag key={tag} variant="accent">
                    {tag}
                  </Tag>
                ))}
              </div>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-caption mb-1 text-muted-foreground">Pricing</p>
                  <p className="text-body font-medium">{selectedTool.pricing}</p>
                </div>
                <div>
                  <p className="text-caption mb-1 text-muted-foreground">Best For</p>
                  <p className="text-body font-medium">{selectedTool.bestFor}</p>
                </div>
                <div>
                  <p className="text-caption mb-1 text-muted-foreground">Stack Fit</p>
                  <p className="text-body font-medium">{selectedTool.stackFit}</p>
                </div>
                {selectedTool.website && (
                  <div>
                    <p className="text-caption mb-1 text-muted-foreground">Website</p>
                    <a
                      href={selectedTool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body font-medium text-accent hover:underline"
                    >
                      Visit site
                    </a>
                  </div>
                )}
              </div>

              <div className="mb-6 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-h3 mb-3 flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {selectedTool.pros.map((pro) => (
                      <li key={pro} className="text-body text-muted-foreground">
                        • {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-h3 mb-3 flex items-center">
                    <X className="mr-2 h-5 w-5 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {selectedTool.cons.map((con) => (
                      <li key={con} className="text-body text-muted-foreground">
                        • {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="primary">Add to Collection</Button>
                <Button variant="outline">Compare</Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

