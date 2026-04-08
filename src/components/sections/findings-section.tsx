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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div className="space-y-6 lg:pr-8">
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

            <ol className="space-y-6">
              {content.items.map((item) => (
                <li key={item.label} className="border-t border-[var(--line-strong)] pt-5">
                  <div className="flex items-end justify-between gap-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                      {item.metric}
                    </p>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-8 text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-700">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <ImagePlaceholder
              figure={content.distributionVisual}
              tone="neutral"
              canvasClassName="aspect-[16/9]"
            />
            <ImagePlaceholder
              figure={content.relationshipVisual}
              tone="amber"
              canvasClassName="aspect-[16/9]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
