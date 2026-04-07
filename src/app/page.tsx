import { SiteHeader } from "@/components/blocks/site-header";
import { AuthorsSection } from "@/components/sections/authors-section";
import { CitationSection } from "@/components/sections/citation-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FindingsSection } from "@/components/sections/findings-section";
import { FrameworkSection } from "@/components/sections/framework-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ImplicationsSection } from "@/components/sections/implications-section";
import { MethodSection } from "@/components/sections/method-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { SummarySection } from "@/components/sections/summary-section";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection content={homeContent.hero} />
        <SummarySection content={homeContent.summary} />
        <ProblemSection content={homeContent.problem} />
        <MethodSection content={homeContent.method} />
        <FrameworkSection content={homeContent.framework} />
        <FindingsSection content={homeContent.findings} />
        <ImplicationsSection content={homeContent.implications} />
        <AuthorsSection content={homeContent.authors} />
        <ResourcesSection content={homeContent.resources} />
        <CitationSection content={homeContent.citation} />
        <ContactSection content={homeContent.contact} />
      </main>
    </>
  );
}
