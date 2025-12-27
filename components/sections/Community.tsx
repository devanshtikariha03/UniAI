"use client";

import { motion } from "framer-motion";
import { MessageCircle, Heart, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { threads } from "@/data/sampleData";

export function Community() {
  const mainThread = threads[0];

  return (
    <section className="border-t border-border bg-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-h1 mb-4">Community Discussions</h2>
          <p className="text-body mx-auto max-w-2xl text-muted-foreground">
            Join threaded discussions, share knowledge, and get answers from the community.
          </p>
        </div>

        {/* Main Thread Example */}
        <div className="mx-auto max-w-4xl">
          <Card className="mb-6">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-h2">{mainThread.title}</h3>
                  {mainThread.acceptedAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <p className="text-caption text-muted-foreground">
                  by {mainThread.author} • {mainThread.replies} replies • {mainThread.reactions}{" "}
                  reactions
                </p>
              </div>
            </div>

            {/* Thread Summary */}
            {mainThread.summary && (
              <div className="mb-6 rounded-lg bg-accent/5 border border-accent/20 p-4">
                <p className="text-caption mb-2 font-semibold text-accent">Thread Summary</p>
                <p className="text-body text-muted-foreground">{mainThread.summary}</p>
              </div>
            )}

            {/* Nested Replies */}
            <div className="space-y-4 border-t border-border pt-6">
              {/* Reply 1 */}
              <div className="pl-6 border-l-2 border-border">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-body font-semibold">alex_dev</span>
                  {mainThread.acceptedAnswer && (
                    <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-600">
                      Accepted
                    </span>
                  )}
                </div>
                <p className="text-body mb-3 text-muted-foreground">
                  I've been using GuardrailKit in production for 6 months. The mandatory
                  guardrails I'd recommend are: 1) Input validation (prevent injection), 2) Output
                  filtering (sanitize responses), 3) Rate limiting (prevent abuse), and 4) Audit
                  logging (compliance). GuardrailKit makes this setup straightforward with their
                  policy templates.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Heart className="h-4 w-4" />
                    <span>24</span>
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-foreground">
                    Reply
                  </button>
                </div>

                {/* Nested Reply */}
                <div className="mt-4 pl-6 border-l-2 border-muted">
                  <div className="mb-2">
                    <span className="text-body font-semibold">sarah_builder</span>
                  </div>
                  <p className="text-body mb-3 text-muted-foreground">
                    Great answer! I'd add context-aware rate limiting based on user tier. Also,
                    consider adding cost limits per request to prevent runaway costs.
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                      <Heart className="h-4 w-4" />
                      <span>8</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reply 2 */}
              <div className="pl-6 border-l-2 border-border">
                <div className="mb-2">
                  <span className="text-body font-semibold">maya_ai</span>
                </div>
                <p className="text-body mb-3 text-muted-foreground">
                  Don't forget about content moderation for user-generated inputs. Even with
                  validation, you need a safety layer for edge cases.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Heart className="h-4 w-4" />
                    <span>12</span>
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-foreground">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Other Threads */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {threads.slice(1).map((thread, index) => (
              <motion.div
                key={thread.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover>
                  <h4 className="text-h3 mb-2">{thread.title}</h4>
                  <p className="text-caption mb-4 text-muted-foreground">by {thread.author}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {thread.replies}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {thread.reactions}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg">
              Ask a Question
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

