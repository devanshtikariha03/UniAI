import { NetworkingJobs } from "@/components/sections/NetworkingJobs";

export default function JobsPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-h1 mb-4">Jobs & Networking</h1>
        <p className="text-body mb-12 text-muted-foreground">
          Connect with builders and discover opportunities in AI.
        </p>
      </div>
      <NetworkingJobs />
    </div>
  );
}

