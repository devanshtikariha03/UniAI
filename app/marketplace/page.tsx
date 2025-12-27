import { Marketplace } from "@/components/sections/Marketplace";

export default function MarketplacePage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-h1 mb-4">Marketplace</h1>
        <p className="text-body mb-12 text-muted-foreground">
          Verified vendors, premium templates, sponsored placements, and lead capture for AI products.
        </p>
      </div>
      <Marketplace />
    </div>
  );
}

