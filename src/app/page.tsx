import { SiteHeader } from "@/components/blocks/site-header";
import { CitationSection } from "@/components/sections/citation-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ResultsSection } from "@/components/sections/results-section";
import { citationContent } from "@/content/citation";
import { findingsContent } from "@/content/findings";
import { frameworkContent } from "@/content/framework";
import { homeContent } from "@/content/home";
import { problemContent } from "@/content/problem";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection content={homeContent.hero} />
        <ProblemSection content={problemContent} />
        <ResultsSection
          framework={frameworkContent}
          findings={findingsContent}
          stats={homeContent.hero.stats}
        />
        <CitationSection content={citationContent} />
      </main>
    </>
  );
}
