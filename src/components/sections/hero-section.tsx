import type { HeroContent } from "@/types/content";

import { HeroActions } from "@/components/blocks/hero-actions";
import { HeroVisualBlock } from "@/components/blocks/hero-visual";
import { Container } from "@/components/ui/container";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="hero" className="border-b border-slate-200/80 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              {content.eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              {content.description}
            </p>
            <HeroActions actions={content.actions} />
            <p className="max-w-2xl border-l border-slate-300 pl-4 text-sm leading-7 text-slate-500">
              {content.status}
            </p>
          </div>
          <HeroVisualBlock metrics={content.metrics} visual={content.visual} />
        </div>
      </Container>
    </section>
  );
}
