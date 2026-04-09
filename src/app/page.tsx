import { SiteHeader } from "@/components/blocks/site-header";
import { CitationSection } from "@/components/sections/citation-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MethodSection } from "@/components/sections/method-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ResultsSection } from "@/components/sections/results-section";
import { citationContent } from "@/content/citation";
import { findingsContent } from "@/content/findings";
import { frameworkContent } from "@/content/framework";
import { homeContent } from "@/content/home";
import { methodContent } from "@/content/method";
import { problemContent } from "@/content/problem";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection content={homeContent.hero} />
        <ProblemSection content={problemContent} />
        <MethodSection content={methodContent} />
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
