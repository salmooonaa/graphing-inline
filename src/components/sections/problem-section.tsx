import type { ProblemContent } from "@/types/content";

import { Container } from "@/components/ui/container";

type ProblemSectionProps = {
  content: ProblemContent;
};

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section id="motivation" className="border-b border-[var(--line)] py-10 sm:py-12">
      <Container>
        <div className="mx-auto space-y-5 sm:space-y-6">
          <div className="section-reveal layout-copy mx-auto space-y-2">
            <p className="section-eyebrow">{content.eyebrow}</p>
            <h2 className="text-[1.9rem] leading-[1] text-[var(--foreground)] sm:text-[2.25rem]">
              {content.title}
            </h2>
            <p className="max-w-lg text-[0.86rem] leading-5.5 text-[var(--muted)] sm:text-[0.92rem] sm:leading-6.5">
              {content.description}
            </p>
          </div>

          <ol className="section-reveal reveal-delay-1 layout-band mx-auto grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {content.points.map((point) => (
              <li key={point.label} className="bg-white px-4 py-4.5 sm:px-4.5 sm:py-5">
                <p className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                  {point.label}
                </p>
                <h3 className="mt-3 text-[1.14rem] leading-tight text-[var(--foreground)]">
                  {point.title}
                </h3>
                <p className="mt-2 text-[0.84rem] leading-5.5 text-[var(--muted)]">
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
