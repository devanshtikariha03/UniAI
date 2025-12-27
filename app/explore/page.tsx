import type { Metadata } from "next";
import { Discover } from "@/components/sections/Discover";
import { News } from "@/components/sections/News";

export const metadata: Metadata = {
  title: "Explore - UniAI",
  description: "Discover AI products, projects, and the latest news in AI.",
};

export default function ExplorePage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-h1 mb-4">Explore</h1>
        <p className="text-body mb-12 text-muted-foreground">
          Discover AI products, projects, and the latest news in AI.
        </p>
      </div>
      <Discover />
      <News />
    </div>
  );
}

