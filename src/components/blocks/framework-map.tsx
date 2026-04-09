import type { FrameworkDimension } from "@/types/content";

import { FigureCaption } from "@/components/blocks/figure-caption";

type FrameworkMapProps = {
  dimensions: FrameworkDimension[];
  title: string;
  caption: string;
};

export function FrameworkMap({ dimensions, title, caption }: FrameworkMapProps) {
  return (
    <figure className="space-y-3.5 border border-[var(--line)] bg-white p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-3">
        {dimensions.map((dimension) => (
          <section
            key={dimension.label}
            className="border-t border-[var(--line)] pt-3.5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
              {dimension.label}
            </p>
            <h3 className="mt-1.5 text-[1.2rem] font-semibold text-[var(--foreground)]">
              {dimension.title}
            </h3>
            <p className="mt-2 text-[0.84rem] leading-5.5 text-[var(--muted)]">
              {dimension.conclusion}
            </p>

            <dl className="mt-3.5 space-y-3">
              {dimension.items.map((item) => (
                <div key={`${dimension.label}-${item.label}`} className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[0.8rem] text-[var(--muted)]">{item.label}</dt>
                    <dd className="text-[0.8rem] font-semibold text-[var(--foreground)]">
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
                    <p className="text-[0.68rem] leading-4.5 text-[var(--muted)]">{item.note}</p>
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
