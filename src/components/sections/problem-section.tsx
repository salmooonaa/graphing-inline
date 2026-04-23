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
          <div id="motivation" className="section-anchor">
            <div className="section-reveal module-header">
              <h2 className="layout-copy min-w-0 text-[1.85rem] leading-[1.08] tracking-[-0.028em] text-[var(--foreground)] sm:text-[2.2rem] sm:leading-[1.05]">
                {content.title}
              </h2>
            </div>
          </div>

          <MotivationDemo segments={content.demo.segments} />

          <p className="section-reveal reveal-delay-2 w-full text-[0.88rem] leading-6 text-[var(--muted)] sm:text-[0.94rem] sm:leading-7">
            <RichText runs={content.statement} />
          </p>
        </div>
      </Container>
    </section>
  );
}
