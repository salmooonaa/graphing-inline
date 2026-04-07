import type { HeroMetric, HeroVisual } from "@/types/content";

type HeroVisualProps = {
  metrics: HeroMetric[];
  visual: HeroVisual;
};

export function HeroVisualBlock({ metrics, visual }: HeroVisualProps) {
  return (
    <figure className="border border-slate-300 bg-white/88 p-6 sm:p-7">
      <div className="grid gap-6 border-b border-slate-200 pb-6">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Main Visual
          </p>
          <figcaption className="text-2xl font-semibold tracking-tight text-slate-950">
            {visual.title}
          </figcaption>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            {visual.caption}
          </p>
        </div>
        <dl className="grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-l border-slate-300 pl-4">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                {metric.label}
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {visual.dimensions.map((dimension) => (
          <section key={dimension.label} className="border-t border-slate-300 pt-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              {dimension.label}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-950">
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
                      className="h-full bg-slate-900"
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
