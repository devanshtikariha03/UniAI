"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { jobs } from "@/data/sampleData";

const builders = [
  {
    id: "1",
    name: "Alex Chen",
    role: "Senior Agent Engineer",
    skills: ["Agents", "Eval", "Safety"],
    location: "San Francisco, CA",
  },
  {
    id: "2",
    name: "Sarah Kim",
    role: "AI Researcher",
    skills: ["RAG", "Tools", "Agents"],
    location: "Remote",
  },
  {
    id: "3",
    name: "Maya Patel",
    role: "Agent Architect",
    skills: ["Safety", "Observability", "Agents"],
    location: "New York, NY",
  },
];

export function NetworkingJobs() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-h1 mb-4">Networking & Jobs</h2>
          <p className="text-body mx-auto max-w-2xl text-muted-foreground">
            Connect with builders and discover opportunities in AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Builder Profiles */}
          <div>
            <h3 className="text-h2 mb-6">Builder Profiles</h3>
            <div className="space-y-4">
              {builders.map((builder, index) => (
                <motion.div
                  key={builder.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover>
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h4 className="text-h3 mb-1">{builder.name}</h4>
                        <p className="text-body mb-2 text-muted-foreground">{builder.role}</p>
                        <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {builder.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {builder.skills.map((skill) => (
                        <Tag key={skill} variant="accent" size="sm">
                          {skill}
                        </Tag>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Jobs Board */}
          <div>
            <h3 className="text-h2 mb-6">Jobs Board</h3>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover>
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <h4 className="text-h3">{job.title}</h4>
                          {job.verified && (
                            <span title="Verified company">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            </span>
                          )}
                        </div>
                        <p className="text-body mb-2 font-medium">{job.company}</p>
                        <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.remote ? "Remote" : job.location}
                          </span>
                          {job.salary && (
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {job.salary}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Tag key={tag} variant="muted" size="sm">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

