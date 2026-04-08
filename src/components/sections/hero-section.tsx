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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <div className="section-reveal space-y-9 lg:pr-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-[var(--line)] bg-white/72 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                {content.badge}
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                First-screen summary for fast reading
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-[12ch] text-5xl leading-[0.94] text-[var(--foreground)] sm:text-6xl lg:text-[5.1rem]">
                {content.title}
              </h1>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
                {content.authorsLine}
              </p>
              <p className="text-sm text-[var(--muted)]">{content.publicationLine}</p>
            </div>

            <p className="max-w-2xl border-l-2 border-[var(--foreground)] pl-5 text-lg leading-8 text-[var(--muted-strong)] sm:text-[1.35rem] sm:leading-9">
              {content.thesis}
            </p>

            <div className="flex flex-wrap gap-3">
              {content.actions.map((action) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  className={
                    action.variant === "primary"
                      ? "inline-flex items-center border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:rgba(23,19,15,0.88)]"
                      : "inline-flex items-center border border-[var(--line-strong)] bg-white/78 px-5 py-3 text-sm font-medium text-[var(--muted-strong)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>

            <dl className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
              {content.stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-[var(--surface-strong)] px-4 py-4 sm:px-5 sm:py-5"
                >
                  <dt className="font-[var(--font-data)] text-[0.64rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-[var(--font-editorial)] text-4xl leading-none tracking-tight text-[var(--foreground)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ImagePlaceholder
            className="section-reveal reveal-delay-1"
            figure={content.visual}
            tone="neutral"
            canvasClassName="aspect-[16/11] md:aspect-[16/10]"
          />
        </div>
      </Container>
    </section>
  );
}
