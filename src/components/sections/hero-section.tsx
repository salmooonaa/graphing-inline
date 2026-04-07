import type { HeroContent } from "@/types/content";

import { HeroActions } from "@/components/blocks/hero-actions";
import { HeroVisualBlock } from "@/components/blocks/hero-visual";
import { Container } from "@/components/ui/container";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="border-b border-[var(--line)] px-0 py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-7 lg:pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {content.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-[5.45rem] lg:leading-[0.95]">
              {content.title}
            </h1>
            <p className="max-w-2xl text-sm uppercase tracking-[0.16em] text-slate-500">
              {content.authorsLine}
            </p>
            <p className="max-w-2xl text-sm uppercase tracking-[0.16em] text-slate-500">
              {content.publicationLine}
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              {content.description}
            </p>
            <HeroActions actions={content.actions} />
            <p className="max-w-2xl border-l border-[var(--line-strong)] pl-4 text-sm leading-7 text-slate-600">
              {content.status}
            </p>
          </div>
          <HeroVisualBlock metrics={content.metrics} visual={content.visual} />
        </div>
      </Container>
    </section>
  );
}
