import type { MethodContent } from "@/types/content";

import { Container } from "@/components/ui/container";

type MethodSectionProps = {
  content: MethodContent;
};

export function MethodSection({ content }: MethodSectionProps) {
  return (
    <section id="method" className="border-b border-[var(--line)] py-12 sm:py-14">
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

          <ol className="section-reveal reveal-delay-1 layout-figure mx-auto grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-4">
            {content.phases.map((phase, index) => (
              <li key={phase.title} className="bg-white px-4 py-5 sm:px-5 sm:py-6">
                <p className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                  {`S${index + 1}`}
                </p>
                <h3 className="mt-3.5 text-[1.3rem] leading-tight text-[var(--foreground)]">
                  {phase.title}
                </h3>
                {phase.metric ? (
                  <p className="mt-2.5 font-[var(--font-editorial)] text-[1.75rem] leading-none text-[var(--foreground)]">
                    {phase.metric}
                  </p>
                ) : null}
                {phase.summary ? (
                  <p className="mt-2.5 text-[0.9rem] leading-6 text-[var(--muted)]">
                    {phase.summary}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>

          {content.note ? (
            <p className="section-reveal reveal-delay-2 layout-figure mx-auto border-t border-[var(--line)] pt-3.5 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted)]">
              {content.note}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
