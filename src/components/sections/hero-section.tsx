import type { HeroContent } from "@/types/content";

import { HeroActions } from "@/components/blocks/hero-actions";
import { Container } from "@/components/ui/container";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="hero" className="border-b border-slate-200/80 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              {content.eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              {content.description}
            </p>
            <HeroActions actions={content.actions} />
            <p className="text-sm text-slate-500">{content.status}</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-6 shadow-sm">
            <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Figure Placeholder
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ["Where", "Positioning patterns across paper contexts."],
                  ["Why", "Communicative functions in scholarly writing."],
                  ["How", "Observed visual representations in the corpus."],
                ].map(([label, copy]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-base font-semibold text-slate-950">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
