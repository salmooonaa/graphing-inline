import type { MethodContent } from "@/types/content";

import { Container } from "@/components/ui/container";

type MethodSectionProps = {
  content: MethodContent;
};

export function MethodSection({ content }: MethodSectionProps) {
  return (
    <section id="method" className="border-b border-[var(--line)] py-16 sm:py-18">
      <Container>
        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
          <div className="section-reveal space-y-3">
            <p className="section-eyebrow">{content.eyebrow}</p>
            <h2 className="text-4xl leading-[0.98] text-[var(--foreground)] sm:text-[3rem]">
              {content.title}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {content.description}
            </p>
          </div>

          <ol className="section-reveal reveal-delay-1 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-4">
            {content.phases.map((phase, index) => (
              <li key={phase.title} className="bg-white px-5 py-6 sm:px-6 sm:py-7">
                <p className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                  {`S${index + 1}`}
                </p>
                <h3 className="mt-4 text-[1.5rem] leading-tight text-[var(--foreground)]">
                  {phase.title}
                </h3>
                {phase.metric ? (
                  <p className="mt-3 font-[var(--font-editorial)] text-[2rem] leading-none text-[var(--foreground)]">
                    {phase.metric}
                  </p>
                ) : null}
                {phase.summary ? (
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {phase.summary}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>

          {content.note ? (
            <p className="section-reveal reveal-delay-2 border-t border-[var(--line)] pt-4 text-[0.78rem] uppercase tracking-[0.2em] text-[var(--muted)]">
              {content.note}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
