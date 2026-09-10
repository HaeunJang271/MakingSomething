import { DaySystem } from "@/components/sections/DaySystem";
import { FailureSection } from "@/components/sections/FailureSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { JoinSection } from "@/components/sections/JoinSection";
import { MakersPreview } from "@/components/sections/MakersPreview";
import { Manifesto } from "@/components/sections/Manifesto";
import { ProjectArchivePreview } from "@/components/sections/ProjectArchivePreview";
import { ProjectFeature } from "@/components/sections/ProjectFeature";
import { WhatWeAre } from "@/components/sections/WhatWeAre";

/**
 * MAKE SOMETHING homepage.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <WhatWeAre />
      <HowItWorks />
      <DaySystem />
      <ProjectFeature />
      <FailureSection />
      <ProjectArchivePreview />
      <MakersPreview />
      <JoinSection />
      <FinalCta />
    </>
  );
}
