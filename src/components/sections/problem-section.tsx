import type { ProblemContent } from "@/types/content";

import { Container } from "@/components/ui/container";

type ProblemSectionProps = {
  content: ProblemContent;
};

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section id="motivation" className="border-b border-[var(--line)] py-16 sm:py-18">
      <Container>
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10">
          <div className="section-reveal space-y-3">
            <p className="section-eyebrow">{content.eyebrow}</p>
            <h2 className="text-4xl leading-[0.98] text-[var(--foreground)] sm:text-[3rem]">
              {content.title}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {content.description}
            </p>
          </div>

          <ol className="section-reveal reveal-delay-1 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {content.points.map((point) => (
              <li key={point.label} className="bg-white px-5 py-6 sm:px-6 sm:py-7">
                <p className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                  {point.label}
                </p>
                <h3 className="mt-4 text-[1.5rem] leading-tight text-[var(--foreground)]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {point.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
