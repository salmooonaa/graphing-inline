import type { HeroMetric, HeroVisual } from "@/types/content";

type HeroVisualProps = {
  metrics: HeroMetric[];
  visual: HeroVisual;
};

export function HeroVisualBlock({ metrics, visual }: HeroVisualProps) {
  return (
    <figure className="relative overflow-hidden border border-[var(--line-strong)] bg-[rgba(255,252,247,0.92)] p-6 sm:p-7">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(138,90,31,0.1),rgba(20,57,68,0.08),transparent)]"
      />
      <div className="relative grid gap-6 border-b border-[var(--line)] pb-6">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Main Visual
          </p>
          <figcaption className="text-3xl font-semibold tracking-tight text-slate-950">
            {visual.title}
          </figcaption>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            {visual.caption}
          </p>
        </div>
        <dl className="grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-l border-[var(--line)] pl-4">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                {metric.label}
              </dt>
              <dd className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mt-6 grid gap-6 lg:grid-cols-3">
        {visual.dimensions.map((dimension) => (
          <section
            key={dimension.label}
            className="border-t border-[var(--line-strong)] pt-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {dimension.label}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-950">
              {dimension.subtitle}
            </h3>
            <dl className="mt-4 space-y-4">
              {dimension.items.map((item) => (
                <div key={`${dimension.label}-${item.label}`} className="space-y-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm leading-6 text-slate-700">{item.label}</dt>
                    <dd className="text-sm font-semibold text-slate-950">
                      {item.value}
                    </dd>
                  </div>
                  <div className="h-1.5 bg-slate-200">
                    <div
                      className="h-full bg-[linear-gradient(90deg,#111827,#8a5a1f)]"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </figure>
  );
}
