import type { FrameworkDimension } from "@/types/content";

import { FigureCaption } from "@/components/blocks/figure-caption";

type FrameworkMapProps = {
  dimensions: FrameworkDimension[];
  title: string;
  caption: string;
};

export function FrameworkMap({ dimensions, title, caption }: FrameworkMapProps) {
  return (
    <figure className="space-y-4.5 border border-[var(--line)] bg-white p-5 sm:p-6">
      <div className="grid gap-5 lg:grid-cols-3">
        {dimensions.map((dimension) => (
          <section
            key={dimension.label}
            className="border-t border-[var(--line)] pt-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
              {dimension.label}
            </p>
            <h3 className="mt-2 text-[1.45rem] font-semibold text-[var(--foreground)]">
              {dimension.title}
            </h3>
            <p className="mt-2.5 text-[0.9rem] leading-6 text-[var(--muted)]">
              {dimension.conclusion}
            </p>

            <dl className="mt-4 space-y-3.5">
              {dimension.items.map((item) => (
                <div key={`${dimension.label}-${item.label}`} className="space-y-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[0.86rem] text-[var(--muted)]">{item.label}</dt>
                    <dd className="text-[0.86rem] font-semibold text-[var(--foreground)]">
                      {item.value}
                    </dd>
                  </div>
                  <div className="h-1.5 bg-black/8">
                    <div
                      className="h-full bg-[var(--foreground)]"
                      style={{ width: item.width }}
                    />
                  </div>
                  {item.note ? (
                    <p className="text-[0.72rem] leading-5 text-[var(--muted)]">{item.note}</p>
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
