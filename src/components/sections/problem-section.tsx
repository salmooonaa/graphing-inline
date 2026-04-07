import type { ProblemContent } from "@/types/content";

import { Container } from "@/components/ui/container";

type ProblemSectionProps = {
  content: ProblemContent;
};

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section
      id="problem"
      className="scroll-mt-24 border-t border-slate-200/80 py-16 sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {content.title}
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              {content.description}
            </p>
          </div>

          <ol className="grid gap-8 md:grid-cols-3">
            {content.points.map((point) => (
              <li
                key={point.label}
                className="border-t border-slate-900 pt-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {point.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-8 text-slate-950">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {point.description}
                </p>
                <p className="mt-4 border-l border-slate-300 pl-4 text-sm leading-7 text-slate-600">
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
