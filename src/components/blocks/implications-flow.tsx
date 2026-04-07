import type { ImplicationsFigure } from "@/types/content";

import { FigureCaption } from "@/components/blocks/figure-caption";

type ImplicationsFlowProps = {
  figure: ImplicationsFigure;
};

export function ImplicationsFlow({ figure }: ImplicationsFlowProps) {
  return (
    <figure className="border border-[var(--line-strong)] bg-[rgba(255,252,247,0.92)] p-6 sm:p-7">
      <div className="grid gap-4 md:grid-cols-3">
        {figure.steps.map((step, index) => (
          <section key={step.label} className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--accent-soft)] text-sm font-semibold text-slate-950">
                {step.label}
              </div>
              {index < figure.steps.length - 1 ? (
                <div className="hidden h-px flex-1 bg-[var(--line)] md:block" />
              ) : null}
            </div>
            <h3 className="text-2xl font-semibold text-slate-950">{step.title}</h3>
            <p className="text-sm leading-7 text-slate-700">{step.summary}</p>
          </section>
        ))}
      </div>

      <div className="mt-6">
        <FigureCaption title={figure.title} caption={figure.caption} />
      </div>
    </figure>
  );
}
