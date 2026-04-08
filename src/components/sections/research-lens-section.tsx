import type { ResearchLensContent } from "@/types/content";

import { ImagePlaceholder } from "@/components/blocks/image-placeholder";
import { Container } from "@/components/ui/container";

type ResearchLensSectionProps = {
  content: ResearchLensContent;
};

const accentClassMap = {
  blue: {
    badge: "text-[var(--blue)]",
    border: "border-[var(--blue-line)]",
    surface: "bg-[var(--blue-soft)]",
  },
  amber: {
    badge: "text-[var(--amber)]",
    border: "border-[var(--amber-line)]",
    surface: "bg-[var(--amber-soft)]",
  },
  green: {
    badge: "text-[var(--green)]",
    border: "border-[var(--green-line)]",
    surface: "bg-[var(--green-soft)]",
  },
} as const;

export function ResearchLensSection({ content }: ResearchLensSectionProps) {
  return (
    <section id="lens" className="border-b border-[var(--line)] py-18 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-start">
          <div className="space-y-8 lg:pr-10">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                {content.eyebrow}
              </p>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {content.title}
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
                {content.description}
              </p>
            </div>

            <div className="space-y-4 border-y border-[var(--line)] py-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Definition
                </p>
                <p className="mt-2 text-base leading-8 text-slate-800">
                  {content.definition}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Research question
                </p>
                <p className="mt-2 text-base leading-8 text-slate-800">
                  {content.researchQuestion}
                </p>
              </div>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3">
              {content.metrics.map((metric) => (
                <div key={metric.label} className="border-l border-[var(--line)] pl-4">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-slate-950">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-6">
            <ImagePlaceholder
              figure={content.visual}
              tone="blue"
              canvasClassName="aspect-[15/9]"
            />

            <div className="grid gap-4 md:grid-cols-3">
              {content.axes.map((axis) => {
                const accent = accentClassMap[axis.accent];

                return (
                  <article
                    key={axis.label}
                    className={`border border-[var(--line)] bg-white/75 p-4 ${accent.border} ${accent.surface}`}
                  >
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${accent.badge}`}
                    >
                      {axis.label}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950">
                      {axis.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {axis.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
