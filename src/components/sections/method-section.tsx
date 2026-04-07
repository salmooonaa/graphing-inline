import type { MethodContent } from "@/types/content";

import { SectionIntro } from "@/components/blocks/section-intro";
import { Container } from "@/components/ui/container";

type MethodSectionProps = {
  content: MethodContent;
};

export function MethodSection({ content }: MethodSectionProps) {
  return (
    <section
      id="method"
      className="scroll-mt-24 border-t border-[var(--line)] bg-[rgba(255,252,247,0.64)] py-16 sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">
          <SectionIntro
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            accent={content.note}
            className="lg:pr-8"
          />

          <ol className="space-y-6">
            {content.phases.map((phase, index) => (
              <li
                key={phase.title}
                className="grid gap-5 border-t border-[var(--line-strong)] pt-5 lg:grid-cols-[120px_1fr]"
              >
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                    {`S${index + 1}`}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {phase.title}
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  <div className="border-l border-[var(--line)] pl-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Input
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                      {phase.input.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l border-[var(--line)] pl-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Process
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                      {phase.process.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l border-[var(--line)] pl-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Output
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                      {phase.output.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
