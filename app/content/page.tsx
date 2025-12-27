import { Content } from "@/components/sections/Content";

export default function ContentPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-h1 mb-4">Content</h1>
        <p className="text-body mb-12 text-muted-foreground">
          Blogs, newsletters, and video content to help you build better agents.
        </p>
      </div>
      <Content />
    </div>
  );
}

