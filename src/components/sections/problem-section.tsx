import type { ProblemContent } from "@/types/content";

import { SectionIntro } from "@/components/blocks/section-intro";
import { Container } from "@/components/ui/container";

type ProblemSectionProps = {
  content: ProblemContent;
};

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section
      id="problem"
      className="scroll-mt-24 border-t border-[var(--line)] py-16 sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          <SectionIntro
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            accent="The argument progresses from a reading burden, to the promise of inline graphics, to the absence of an in-the-wild scholarly account."
            className="lg:pr-8"
          />

          <ol className="grid gap-8 md:grid-cols-3">
            {content.points.map((point) => (
              <li
                key={point.label}
                className="border-t border-[var(--line-strong)] bg-[var(--surface)] pt-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  {point.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-8 text-slate-950">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {point.description}
                </p>
                <p className="mt-4 border-l border-[var(--line)] pl-4 text-sm leading-7 text-slate-600">
                  {point.evidence}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
