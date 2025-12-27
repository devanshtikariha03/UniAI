"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { templates } from "@/data/sampleData";

export function Templates() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-h1 mb-4">Code Snippets & Templates</h2>
          <p className="text-body mx-auto max-w-2xl text-muted-foreground">
            Discover and use battle-tested code snippets, templates, and playbooks for AI.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 border-b border-border">
          {templates.map((template, index) => (
            <button
              key={template.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === index
                  ? "border-b-2 border-accent text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {template.title}
            </button>
          ))}
        </div>

        {/* Active Template */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <Card>
            <div className="mb-4 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-h2 mb-2">{templates[activeTab].title}</h3>
                <p className="text-body mb-4 text-muted-foreground">
                  {templates[activeTab].description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {templates[activeTab].tags.map((tag) => (
                    <Tag key={tag} variant="accent" size="sm">
                      {tag}
                    </Tag>
                  ))}
                </div>
                <p className="text-caption text-muted-foreground">
                  Used in: {templates[activeTab].usedIn} projects
                </p>
              </div>
            </div>

            {/* Code Block */}
            <div className="relative rounded-lg bg-[#1e1e1e] p-6">
              <button
                onClick={() => handleCopy(templates[activeTab].code)}
                className="absolute right-4 top-4 flex items-center gap-2 rounded-lg bg-[#2d2d2d] px-3 py-1.5 text-sm text-white transition-colors hover:bg-[#3d3d3d]"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </button>
              <pre className="overflow-x-auto text-sm text-[#d4d4d4]">
                <code>{templates[activeTab].code}</code>
              </pre>
            </div>
          </Card>
        </motion.div>

        {/* All Templates Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover onClick={() => setActiveTab(index)}>
                <h4 className="text-h3 mb-2">{template.title}</h4>
                <p className="text-caption mb-4 text-muted-foreground">{template.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {template.tags.slice(0, 2).map((tag) => (
                    <Tag key={tag} variant="muted" size="sm">
                      {tag}
                    </Tag>
                  ))}
                </div>
                <p className="text-caption text-muted-foreground">
                  Used in {template.usedIn} projects
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

