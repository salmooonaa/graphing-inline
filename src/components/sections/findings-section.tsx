import type { CoreFindingsContent } from "@/types/content";

import { ImagePlaceholder } from "@/components/blocks/image-placeholder";
import { Container } from "@/components/ui/container";

type FindingsSectionProps = {
  content: CoreFindingsContent;
};

export function FindingsSection({ content }: FindingsSectionProps) {
  return (
    <section id="findings" className="border-b border-[var(--line)] py-18 sm:py-20">
      <Container>
        <div className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:items-end">
            <div className="section-reveal space-y-4">
              <p className="section-eyebrow">{content.eyebrow}</p>
              <h2 className="max-w-[10ch] text-4xl leading-[0.98] text-[var(--foreground)] sm:text-[3.2rem]">
                {content.title}
              </h2>
            </div>

            <p className="section-reveal reveal-delay-1 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {content.description}
            </p>
          </div>

          <ol className="section-reveal reveal-delay-1 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
            {content.items.map((item) => (
              <li
                key={item.label}
                className="bg-[var(--surface-strong)] px-5 py-6 sm:px-6 sm:py-7"
              >
                <div className="flex items-end justify-between gap-4">
                  <p className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                    {item.label}
                  </p>
                  <p className="font-[var(--font-data)] text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {item.metric}
                  </p>
                </div>
                <h3 className="mt-4 text-[1.9rem] leading-tight text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="grid gap-6 xl:grid-cols-2">
            <ImagePlaceholder
              className="section-reveal reveal-delay-2"
              figure={content.distributionVisual}
              tone="neutral"
              canvasClassName="aspect-[16/10]"
            />
            <ImagePlaceholder
              className="section-reveal reveal-delay-3"
              figure={content.relationshipVisual}
              tone="green"
              canvasClassName="aspect-[16/10]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
