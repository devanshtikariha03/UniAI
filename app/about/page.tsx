import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "About - UniAI",
  description: "Learn about UniAI's mission to be the unified homebase for AI builders.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-h1 mb-6">About UniAI</h1>
          <p className="text-h3 text-muted-foreground">
            The unified homebase for AI builders.
          </p>
        </div>

        <div className="space-y-12">
          <Card>
            <h2 className="text-h2 mb-4">Our Mission</h2>
            <p className="text-body mb-4 text-muted-foreground">
              UniAI was born from the frustration of building AI systems in a fragmented
              ecosystem. We saw builders spending weeks researching tools, comparing frameworks,
              and reinventing solutions that others had already solved.
            </p>
            <p className="text-body text-muted-foreground">
              Our mission is to create a unified platform where AI builders can discover
              tools, track news, compare stacks, share templates, and ship AI products safely—all in one
              place.
            </p>
          </Card>

          <Card>
            <h2 className="text-h2 mb-4">What We Offer</h2>
            <ul className="space-y-3 text-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <span>
                  <strong className="text-foreground">Discovery:</strong> Comprehensive directory
                  of AI tools, frameworks, and projects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <span>
                  <strong className="text-foreground">Search:</strong> Perplexity-like search
                  across the platform with synthesized answers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <span>
                  <strong className="text-foreground">Community:</strong> Threaded discussions
                  where builders share knowledge and experiences
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <span>
                  <strong className="text-foreground">Templates:</strong> Code snippets and
                  playbooks from experienced builders
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <span>
                  <strong className="text-foreground">Content:</strong> Blogs, newsletters, and
                  video content to help you learn
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <span>
                  <strong className="text-foreground">Networking:</strong> Connect with builders
                  and discover job opportunities
                </span>
              </li>
            </ul>
          </Card>

          <Card id="contact">
            <h2 className="text-h2 mb-4">Contact Us</h2>
            <p className="text-body mb-6 text-muted-foreground">
              Have questions, feedback, or want to collaborate? We'd love to hear from you.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@uniai.dev"
                className="flex items-center gap-3 text-body text-foreground transition-colors hover:text-accent"
              >
                <Mail className="h-5 w-5" />
                hello@uniai.dev
              </a>
              <a
                href="/community"
                className="flex items-center gap-3 text-body text-foreground transition-colors hover:text-accent"
              >
                <MessageSquare className="h-5 w-5" />
                Join our community discussions
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

