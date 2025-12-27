import { Community } from "@/components/sections/Community";

export default function CommunityPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-h1 mb-4">Community</h1>
        <p className="text-body mb-12 text-muted-foreground">
          Join threaded discussions, share knowledge, and get answers from the community.
        </p>
      </div>
      <Community />
    </div>
  );
}

