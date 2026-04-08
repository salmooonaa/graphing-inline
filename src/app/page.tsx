import { SiteHeader } from "@/components/blocks/site-header";
import { FindingsSection } from "@/components/sections/findings-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PaperSection } from "@/components/sections/paper-section";
import { ResearchLensSection } from "@/components/sections/research-lens-section";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection content={homeContent.hero} />
        <ResearchLensSection content={homeContent.lens} />
        <FindingsSection content={homeContent.findings} />
        <PaperSection content={homeContent.paper} />
      </main>
    </>
  );
}
