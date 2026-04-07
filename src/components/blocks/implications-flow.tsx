import type { ImplicationsFigure } from "@/types/content";

import { FigureCaption } from "@/components/blocks/figure-caption";

type ImplicationsFlowProps = {
  figure: ImplicationsFigure;
};

export function ImplicationsFlow({ figure }: ImplicationsFlowProps) {
  return (
    <figure className="border border-slate-300 bg-white p-6 sm:p-7">
      <div className="grid gap-4 md:grid-cols-3">
        {figure.steps.map((step, index) => (
          <section key={step.label} className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-900 text-sm font-semibold text-slate-950">
                {step.label}
              </div>
              {index < figure.steps.length - 1 ? (
                <div className="hidden h-px flex-1 bg-slate-300 md:block" />
              ) : null}
            </div>
            <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
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
