import type { Metadata } from "next";
import { SearchDemo } from "@/components/sections/SearchDemo";

export const metadata: Metadata = {
  title: "Search - UniAI",
  description: "Ask questions and get synthesized answers with sources from across UniAI.",
};

export default function SearchPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-h1 mb-4">Search</h1>
        <p className="text-body mb-12 text-muted-foreground">
          Ask questions and get synthesized answers with sources from across UniAI.
        </p>
      </div>
      <SearchDemo />
    </div>
  );
}

