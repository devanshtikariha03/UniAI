import { Hero } from "@/components/sections/Hero";
import { Discover } from "@/components/sections/Discover";
import { News } from "@/components/sections/News";
import { SearchDemo } from "@/components/sections/SearchDemo";
import { Community } from "@/components/sections/Community";
import { Templates } from "@/components/sections/Templates";
import { Content } from "@/components/sections/Content";
import { NetworkingJobs } from "@/components/sections/NetworkingJobs";
import { Marketplace } from "@/components/sections/Marketplace";
import { SocialProof } from "@/components/sections/SocialProof";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Discover />
      <News />
      <SearchDemo />
      <Community />
      <Templates />
      <Content />
      <NetworkingJobs />
      <Marketplace />
      <SocialProof />
      <Pricing />
    </>
  );
}

