import type { ProblemContent } from "@/types/content";

import { MotivationDemo } from "@/components/blocks/motivation-demo";
import { Container } from "@/components/ui/container";
import { RichText } from "@/lib/rich-text";

type ProblemSectionProps = {
  content: ProblemContent;
};

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section className="border-b border-[var(--line)] py-10 sm:py-12">
      <Container>
        <div className="layout-module mx-auto space-y-6 sm:space-y-7">
          {/* Header: eyebrow + thesis + framing */}
          <div id="motivation" className="section-anchor">
            <div className="section-reveal module-header">
              <p className="section-eyebrow">{content.eyebrow}</p>
              <div className="module-header-row">
                <h2 className="layout-copy min-w-0 text-[1.85rem] leading-[1.08] tracking-[-0.028em] text-[var(--foreground)] sm:text-[2.2rem] sm:leading-[1.05]">
                  <RichText runs={content.thesis} />
                </h2>
                <div aria-hidden="true" className="module-divider" />
              </div>
              <p className="layout-copy max-w-[36rem] text-[0.88rem] leading-6 text-[var(--muted)] sm:text-[0.94rem] sm:leading-7">
                {content.framing}
              </p>
            </div>
          </div>

          {/* Demo panel with Plain | Word-scale toggle */}
          <MotivationDemo segments={content.demo.segments} />

          {/* Annotation */}
          <p className="section-reveal reveal-delay-2 layout-copy max-w-[36rem] text-[0.82rem] leading-6 text-[var(--muted)] sm:text-[0.86rem]">
            {content.annotation}
          </p>

          {/* Gap + Research Question */}
          <div className="section-reveal reveal-delay-3 layout-copy max-w-[36rem] space-y-4">
            <p className="text-[0.88rem] leading-6 text-[var(--muted)] sm:text-[0.94rem] sm:leading-7">
              {content.gap}
            </p>
            <blockquote
              className="border-l border-[var(--line-strong)] pl-4 text-[1.05rem] leading-7 text-[var(--foreground)] sm:text-[1.16rem] sm:leading-8"
              style={{
                fontFamily: "var(--font-editorial), serif",
                fontStyle: "italic",
              }}
            >
              {content.researchQuestion}
            </blockquote>
          </div>

          {/* Bridge */}
          <p className="section-reveal reveal-delay-4 layout-copy max-w-[36rem] text-[0.82rem] leading-6 text-[var(--muted)] sm:text-[0.86rem]">
            <RichText runs={content.bridge} />
          </p>
        </div>
      </Container>
    </section>
  );
}
