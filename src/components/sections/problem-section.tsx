import type { ProblemContent } from "@/types/content";

import { Container } from "@/components/ui/container";

type ProblemSectionProps = {
  content: ProblemContent;
};

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section id="motivation" className="border-b border-[var(--line)] py-12 sm:py-14">
      <Container>
        <div className="mx-auto space-y-6 sm:space-y-7">
          <div className="section-reveal layout-copy mx-auto space-y-2.5">
            <p className="section-eyebrow">{content.eyebrow}</p>
            <h2 className="text-[2.15rem] leading-[0.98] text-[var(--foreground)] sm:text-[2.55rem]">
              {content.title}
            </h2>
            <p className="max-w-xl text-[0.92rem] leading-6 text-[var(--muted)] sm:text-[0.98rem] sm:leading-7">
              {content.description}
            </p>
          </div>

          <ol className="section-reveal reveal-delay-1 layout-figure mx-auto grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {content.points.map((point) => (
              <li key={point.label} className="bg-white px-4 py-5 sm:px-5 sm:py-6">
                <p className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                  {point.label}
                </p>
                <h3 className="mt-3.5 text-[1.3rem] leading-tight text-[var(--foreground)]">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-6 text-[var(--muted)]">
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
