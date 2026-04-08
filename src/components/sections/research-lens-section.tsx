import type { ResearchLensContent } from "@/types/content";

import { ImagePlaceholder } from "@/components/blocks/image-placeholder";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type ResearchLensSectionProps = {
  content: ResearchLensContent;
};

const accentClassMap = {
  blue: {
    badge: "text-[var(--blue)]",
    surface: "bg-[var(--blue-soft)]",
  },
  amber: {
    badge: "text-[var(--amber)]",
    surface: "bg-[var(--amber-soft)]",
  },
  green: {
    badge: "text-[var(--green)]",
    surface: "bg-[var(--green-soft)]",
  },
} as const;

export function ResearchLensSection({ content }: ResearchLensSectionProps) {
  return (
    <section id="lens" className="border-b border-[var(--line)] py-18 sm:py-20">
      <Container>
        <div className="mx-auto max-w-5xl space-y-10 sm:space-y-12">
          <div className="section-reveal space-y-4">
            <p className="section-eyebrow">{content.eyebrow}</p>
            <h2 className="max-w-[12ch] text-4xl leading-[0.98] text-[var(--foreground)] sm:text-[3.2rem]">
              {content.title}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {content.description}
            </p>
          </div>

          <ImagePlaceholder
            className="section-reveal reveal-delay-1"
            figure={content.visual}
            tone="blue"
            canvasClassName="aspect-[15/9]"
          />

          <div className="section-reveal reveal-delay-1 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {content.axes.map((axis) => {
              const accent = accentClassMap[axis.accent];

              return (
                <article
                  key={axis.label}
                  className={cn(
                    "bg-[var(--surface-strong)] px-5 py-5 sm:px-6 sm:py-6",
                    accent.surface,
                  )}
                >
                  <p
                    className={`text-[0.7rem] font-medium uppercase tracking-[0.22em] ${accent.badge}`}
                  >
                    {axis.label}
                  </p>
                  <h3 className="mt-3 text-[1.65rem] leading-tight text-[var(--foreground)]">
                    {axis.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {axis.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="section-reveal reveal-delay-2 space-y-6">
            <div className="space-y-5 border-l-2 border-[var(--line-strong)] pl-5 sm:pl-6">
              <div>
                <p className="section-eyebrow">Research object</p>
                <p className="mt-2 text-base leading-8 text-[var(--muted-strong)]">
                  {content.definition}
                </p>
              </div>
              <div>
                <p className="section-eyebrow">Guiding question</p>
                <p className="mt-2 text-base leading-8 text-[var(--muted-strong)]">
                  {content.researchQuestion}
                </p>
              </div>
            </div>

            <div className="paper-panel bg-white p-5 sm:p-6">
              <p className="section-eyebrow">Why this section exists</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                Instead of reproducing the full paper structure, the homepage uses
                a single lens so readers can understand the object, the framework,
                and the evidence without reading a long methods narrative.
              </p>
            </div>
          </div>

          <dl className="section-reveal reveal-delay-3 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {content.metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-[var(--surface-strong)] px-5 py-5 sm:px-6"
              >
                <dt className="font-[var(--font-data)] text-[0.64rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {metric.label}
                </dt>
                <dd className="mt-3 font-[var(--font-editorial)] text-[2.4rem] leading-none text-[var(--foreground)]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
