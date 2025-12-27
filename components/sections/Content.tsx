"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Play, Mail } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/sampleData";

const videoContent = [
  {
    id: "1",
    title: "Building Your First Agent with AgentFlow",
    duration: "5:32",
    type: "micro-demo",
    thumbnail: "🎥",
  },
  {
    id: "2",
    title: "Setting Up Guardrails in Production",
    duration: "12:15",
    type: "tutorial",
    thumbnail: "🎥",
  },
  {
    id: "3",
    title: "Agent Evaluation Best Practices",
    duration: "8:47",
    type: "micro-demo",
    thumbnail: "🎥",
  },
];

export function Content() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="border-t border-border bg-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-h1 mb-4">Content & Learning</h2>
          <p className="text-body mx-auto max-w-2xl text-muted-foreground">
            Blogs, newsletters, and video content to help you build better agents.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <h3 className="text-h2 mb-6">Latest Blog Posts</h3>
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover>
                    <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h4 className="text-h2 mb-3">{post.title}</h4>
                    <p className="text-body mb-4 text-muted-foreground">{post.excerpt}</p>
                    <button className="text-body font-medium text-accent hover:underline">
                      Read more →
                    </button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter & Videos */}
          <div className="space-y-8">
            {/* Newsletter */}
            <Card>
              <div className="mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                <h3 className="text-h2">Newsletter</h3>
              </div>
              <p className="text-body mb-4 text-muted-foreground">
                Get weekly updates on AI tools, news, and best practices.
              </p>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-body outline-none focus:border-accent"
                    required
                  />
                  <Button variant="primary" size="sm" className="w-full">
                    Subscribe
                  </Button>
                </form>
              ) : (
                <div className="rounded-lg bg-accent/10 p-4 text-center">
                  <p className="text-body font-medium text-accent">✓ Subscribed!</p>
                  <p className="text-caption text-muted-foreground">
                    Check your email to confirm.
                  </p>
                </div>
              )}
            </Card>

            {/* Videos */}
            <div>
              <h3 className="text-h2 mb-6">Video Content</h3>
              <div className="space-y-4">
                {videoContent.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card hover>
                      <div className="flex items-start gap-4">
                        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-2xl">
                          {video.thumbnail}
                        </div>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <Tag variant="muted" size="sm">
                              {video.type}
                            </Tag>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Play className="h-3 w-3" />
                              {video.duration}
                            </span>
                          </div>
                          <h4 className="text-h3">{video.title}</h4>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

