import type { MethodContent } from "@/types/content";

import { Container } from "@/components/ui/container";

type MethodSectionProps = {
  content: MethodContent;
};

export function MethodSection({ content }: MethodSectionProps) {
  return (
    <section
      id="method"
      className="scroll-mt-24 border-t border-slate-200/80 bg-white/60 py-16 sm:py-20"
    >
      <Container>
        <div className="max-w-3xl space-y-4">
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

        <ol className="mt-12 space-y-10">
          {content.phases.map((phase, index) => (
            <li
              key={phase.title}
              className="grid gap-6 border-t border-slate-300 pt-6 lg:grid-cols-[180px_1fr]"
            >
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {`Stage ${index + 1}`}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {phase.title}
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="border-l border-slate-300 pl-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Input
                  </p>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                    {phase.input.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-l border-slate-300 pl-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Process
                  </p>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                    {phase.process.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-l border-slate-300 pl-4">
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

        {content.note ? (
          <p className="mt-10 border-l border-slate-300 pl-4 text-sm leading-7 text-slate-600">
            {content.note}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
