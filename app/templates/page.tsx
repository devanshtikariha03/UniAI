import { Templates } from "@/components/sections/Templates";

export default function TemplatesPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-h1 mb-4">Templates</h1>
        <p className="text-body mb-12 text-muted-foreground">
          Discover and use battle-tested code snippets, templates, and playbooks for AI.
        </p>
      </div>
      <Templates />
    </div>
  );
}

