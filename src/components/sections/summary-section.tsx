import type { SummaryContent } from "@/types/content";

import { Container } from "@/components/ui/container";

type SummarySectionProps = {
  content: SummaryContent;
};

export function SummarySection({ content }: SummarySectionProps) {
  return (
    <section
      id="summary"
      className="scroll-mt-24 border-y border-[var(--line)] bg-[rgba(255,252,247,0.72)] py-10"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              {content.eyebrow}
            </p>
            <h2 className="max-w-xl text-3xl font-semibold text-slate-950 sm:text-4xl">
              {content.title}
            </h2>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              {content.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {content.points.map((point) => (
              <article
                key={point.title}
                className="border-l border-[var(--line)] pl-4"
              >
                {point.value ? (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    {point.value}
                  </p>
                ) : null}
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
