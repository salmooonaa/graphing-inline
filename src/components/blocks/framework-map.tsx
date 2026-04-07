import type { FrameworkDimension } from "@/types/content";

import { FigureCaption } from "@/components/blocks/figure-caption";

type FrameworkMapProps = {
  dimensions: FrameworkDimension[];
  title: string;
  caption: string;
};

export function FrameworkMap({ dimensions, title, caption }: FrameworkMapProps) {
  return (
    <figure className="space-y-6 border border-[var(--line-strong)] bg-[rgba(255,252,247,0.92)] p-6 sm:p-7">
      <div className="grid gap-6 lg:grid-cols-3">
        {dimensions.map((dimension) => (
          <section
            key={dimension.label}
            className="border-t border-[var(--line-strong)] pt-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {dimension.label}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950">
              {dimension.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              {dimension.conclusion}
            </p>

            <dl className="mt-5 space-y-4">
              {dimension.items.map((item) => (
                <div key={`${dimension.label}-${item.label}`} className="space-y-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-slate-700">{item.label}</dt>
                    <dd className="text-sm font-semibold text-slate-950">
                      {item.value}
                    </dd>
                  </div>
                  <div className="h-1.5 bg-slate-200">
                    <div
                      className="h-full bg-[linear-gradient(90deg,#111827,#8a5a1f)]"
                      style={{ width: item.width }}
                    />
                  </div>
                  {item.note ? (
                    <p className="text-xs leading-6 text-slate-500">{item.note}</p>
                  ) : null}
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <FigureCaption title={title} caption={caption} />
    </figure>
  );
}
