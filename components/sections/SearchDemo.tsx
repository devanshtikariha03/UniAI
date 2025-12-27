"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { tools } from "@/data/sampleData";

export function SearchDemo() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [comparing, setComparing] = useState(false);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setShowResults(true);
    }
  };

  const handleCompare = (toolId: string) => {
    if (selectedTools.includes(toolId)) {
      setSelectedTools(selectedTools.filter((id) => id !== toolId));
    } else if (selectedTools.length < 2) {
      setSelectedTools([...selectedTools, toolId]);
    }
  };

  const selectedToolData = tools.filter((tool) => selectedTools.includes(tool.id));

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-h1 mb-4">Perplexity-like Search</h2>
          <p className="text-body mx-auto max-w-2xl text-muted-foreground">
            Ask questions and get synthesized answers with sources from across UniAI.
          </p>
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="mx-auto mb-8 max-w-2xl">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex items-center rounded-xl border border-border bg-background p-4 shadow-lg backdrop-blur-sm transition-all focus-within:border-accent focus-within:shadow-xl focus-within:shadow-accent/20"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Search className="mr-3 h-5 w-5 text-muted-foreground" />
            </motion.div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about AI..."
              className="flex-1 bg-transparent text-body outline-none placeholder:text-muted-foreground/50"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="ml-3 rounded-lg bg-accent p-2 text-white transition-colors hover:bg-accent-hover"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </form>

        {/* Results */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="mx-auto max-w-4xl"
            >
              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="mb-6">
                  <h3 className="text-h3 mb-4">Answer</h3>
                  <p className="text-body mb-4">
                    Based on your query, here are the key considerations for AI evaluation stacks
                    focused on tool-calling. The most effective approach combines evaluation frameworks
                    like EvalBench for comprehensive testing, observability tools like TraceWatch for
                    monitoring, and safety guardrails from GuardrailKit. These tools are designed to
                    work together and provide end-to-end coverage for production AI systems.
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setComparing(!comparing)}
                    >
                      {comparing ? "Hide" : "Compare"} Tools
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Sources */}
              <div className="mb-6">
                <h3 className="text-h3 mb-4">Sources from UniAI</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {tools.slice(0, 4).map((tool) => (
                    <Card
                      key={tool.id}
                      hover
                      className={selectedTools.includes(tool.id) ? "ring-2 ring-accent" : ""}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-h3 mb-2">{tool.name}</h4>
                          <p className="text-caption text-muted-foreground">{tool.description}</p>
                        </div>
                        {comparing && (
                          <button
                            onClick={() => handleCompare(tool.id)}
                            className={`ml-4 rounded-lg border-2 p-2 ${
                              selectedTools.includes(tool.id)
                                ? "border-accent bg-accent/10"
                                : "border-border hover:border-accent"
                            }`}
                          >
                            {selectedTools.includes(tool.id) ? "✓" : "+"}
                          </button>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Comparison Table */}
              {comparing && selectedTools.length === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card>
                    <h3 className="text-h3 mb-6">Side-by-Side Comparison</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="px-4 py-3 text-left text-sm font-semibold">Feature</th>
                            {selectedToolData.map((tool) => (
                              <th key={tool.id} className="px-4 py-3 text-left text-sm font-semibold">
                                {tool.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="px-4 py-3 text-sm text-muted-foreground">Pricing</td>
                            {selectedToolData.map((tool) => (
                              <td key={tool.id} className="px-4 py-3 text-sm">
                                {tool.pricing}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b border-border">
                            <td className="px-4 py-3 text-sm text-muted-foreground">Best For</td>
                            {selectedToolData.map((tool) => (
                              <td key={tool.id} className="px-4 py-3 text-sm">
                                {tool.bestFor}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b border-border">
                            <td className="px-4 py-3 text-sm text-muted-foreground">Stack Fit</td>
                            {selectedToolData.map((tool) => (
                              <td key={tool.id} className="px-4 py-3 text-sm">
                                {tool.stackFit}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm text-muted-foreground">Limitations</td>
                            {selectedToolData.map((tool) => (
                              <td key={tool.id} className="px-4 py-3 text-sm">
                                {tool.cons[0]}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-body text-muted-foreground">
              Enter a query above to see how UniAI search works
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
