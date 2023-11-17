import { FeaturesSecondarySection } from "@/components/features-secondary-section";
import { HeroSection } from "@/components/hero-section";
import ReactGridMainExample from "@/components/reactgrid-sample";
import { WhyUsSection } from "@/components/why-us-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReactGridMainExample />
      <WhyUsSection />
      <FeaturesSecondarySection />
    </>
  );
}
