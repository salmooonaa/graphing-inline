import type { PageHeroContent } from "@/types/content";

import { ImagePlaceholder } from "@/components/blocks/image-placeholder";
import { Container } from "@/components/ui/container";

type HeroSectionProps = {
  content: PageHeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="overview"
      className="border-b border-[var(--line)] px-0 pb-18 pt-10 sm:pb-20 sm:pt-14 lg:pb-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div className="space-y-8 lg:pr-8">
            <div className="inline-flex items-center gap-2 border border-[var(--line)] bg-white/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-600">
              <span className="h-2 w-2 rounded-full bg-[var(--green)]" />
              {content.badge}
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-slate-950 sm:text-6xl lg:text-[4.75rem]">
                {content.title}
              </h1>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                {content.authorsLine}
              </p>
              <p className="text-sm text-slate-500">{content.publicationLine}</p>
            </div>

            <p className="max-w-2xl border-l-2 border-slate-900 pl-5 text-lg leading-8 text-slate-700 sm:text-xl">
              {content.thesis}
            </p>

            <div className="flex flex-wrap gap-3">
              {content.actions.map((action) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  className={
                    action.variant === "primary"
                      ? "inline-flex items-center border border-slate-950 bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                      : "inline-flex items-center border border-[var(--line-strong)] bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-950 hover:text-slate-950"
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>

            <dl className="grid gap-4 border-t border-[var(--line)] pt-5 sm:grid-cols-3">
              {content.stats.map((item) => (
                <div key={item.label} className="border-l border-[var(--line)] pl-4">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ImagePlaceholder
            figure={content.visual}
            tone="neutral"
            canvasClassName="aspect-[16/11]"
          />
        </div>
      </Container>
    </section>
  );
}
