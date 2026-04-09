import type { ProblemContent } from "@/types/content";

import { Container } from "@/components/ui/container";

type ProblemSectionProps = {
  content: ProblemContent;
};

/* ── tiny helpers for the mock-text diagram ── */

/** A single gray bar pretending to be a line of text */
function TextLine({ w = "100%" }: { w?: string }) {
  return (
    <div
      className="h-[5px] rounded-full bg-[var(--foreground)]/8"
      style={{ width: w }}
    />
  );
}

/** Inline colored shape sitting in a "text line" */
function InlineGraphic({
  kind,
}: {
  kind: "bar" | "dot" | "box";
}) {
  if (kind === "bar")
    return (
      <span className="inline-flex h-[5px] w-[18px] items-center gap-[2px]">
        <span className="h-full w-[5px] rounded-sm bg-[var(--foreground)]/30" />
        <span className="h-[4px] w-[5px] rounded-sm bg-[var(--foreground)]/20" />
        <span className="h-[3px] w-[5px] rounded-sm bg-[var(--foreground)]/14" />
      </span>
    );
  if (kind === "dot")
    return (
      <span className="inline-block h-[5px] w-[5px] rounded-full bg-[var(--foreground)]/30" />
    );
  /* box */
  return (
    <span className="inline-block h-[5px] w-[8px] rounded-[1px] bg-[var(--foreground)]/25" />
  );
}

/** A simulated text paragraph — several gray bars in a column */
function MockParagraph({
  lines,
  className,
}: {
  lines: { w: string; graphic?: "bar" | "dot" | "box" }[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-[6px] ${className ?? ""}`}>
      {lines.map((l, i) =>
        l.graphic ? (
          <div key={i} className="flex items-center gap-[5px]">
            <div
              className="h-[5px] rounded-full bg-[var(--foreground)]/8"
              style={{ width: `calc(${l.w} - 24px)` }}
            />
            <InlineGraphic kind={l.graphic} />
          </div>
        ) : (
          <TextLine key={i} w={l.w} />
        ),
      )}
    </div>
  );
}

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section
      id="motivation"
      className="border-b border-[var(--line)] py-10 sm:py-12"
    >
      <Container>
        <div className="layout-module mx-auto space-y-5 sm:space-y-6">
          {/* ── header ── */}
          <div className="section-reveal module-header">
            <div className="module-header-row">
              <div className="layout-copy min-w-0">
                <h2 className="text-[1.9rem] leading-[1] text-[var(--foreground)] sm:text-[2.25rem]">
                  {content.title}
                </h2>
              </div>
              <div aria-hidden="true" className="module-divider" />
            </div>
            <p className="layout-copy max-w-lg text-[0.86rem] leading-5.5 text-[var(--muted)] sm:text-[0.92rem] sm:leading-6.5">
              {content.description}
            </p>
          </div>

          {/* ── before / after diagram ── */}
          <div className="section-reveal reveal-delay-1 w-full border border-[var(--line)] bg-white">
            <div className="grid md:grid-cols-2">
              {/* LEFT — traditional */}
              <div className="flex flex-col gap-5 border-b border-[var(--line)] p-5 sm:p-6 md:border-b-0 md:border-r">
                <p className="section-eyebrow">Traditional</p>

                <div className="flex-1 space-y-5">
                  {/* simulated paragraph */}
                  <MockParagraph
                    lines={[
                      { w: "100%" },
                      { w: "92%" },
                      { w: "85%" },
                      { w: "96%" },
                      { w: "60%" },
                    ]}
                  />

                  {/* "see Fig. 3" reference + dashed connector + figure box */}
                  <div className="flex flex-col items-start gap-0">
                    <p className="text-[0.7rem] italic text-[var(--muted)]">
                      (see Fig.&nbsp;3)
                    </p>
                    <div className="ml-[2px] h-6 w-0 border-l border-dashed border-[var(--foreground)]/20" />
                    <div className="w-full max-w-[10rem] border border-[var(--line)] p-2.5">
                      <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                        Fig.&nbsp;3
                      </p>
                      <div className="flex items-end gap-[3px]">
                        <div className="h-[18px] w-[6px] rounded-[1px] bg-[var(--foreground)]/12" />
                        <div className="h-[12px] w-[6px] rounded-[1px] bg-[var(--foreground)]/12" />
                        <div className="h-[22px] w-[6px] rounded-[1px] bg-[var(--foreground)]/12" />
                        <div className="h-[16px] w-[6px] rounded-[1px] bg-[var(--foreground)]/12" />
                        <div className="h-[10px] w-[6px] rounded-[1px] bg-[var(--foreground)]/12" />
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[0.78rem] font-medium text-[var(--muted-strong)]">
                  Split attention
                </p>
              </div>

              {/* RIGHT — inline */}
              <div className="flex flex-col gap-5 p-5 sm:p-6">
                <p className="section-eyebrow">Inline</p>

                <div className="flex-1 space-y-5">
                  {/* simulated paragraph with inline graphics */}
                  <MockParagraph
                    lines={[
                      { w: "100%" },
                      { w: "94%", graphic: "box" },
                      { w: "88%" },
                      { w: "96%", graphic: "bar" },
                      { w: "78%" },
                      { w: "92%", graphic: "dot" },
                      { w: "65%" },
                    ]}
                  />

                  <MockParagraph
                    lines={[
                      { w: "100%", graphic: "box" },
                      { w: "90%" },
                      { w: "72%", graphic: "dot" },
                    ]}
                  />
                </div>

                <p className="text-[0.78rem] font-medium text-[var(--muted-strong)]">
                  Integrated reading
                </p>
              </div>
            </div>

            {/* bottom strip — research gap */}
            <div className="border-t border-[var(--line)] px-5 py-3.5 sm:px-6">
              <p className="text-[0.78rem] leading-5.5 text-[var(--muted)]">
                {content.gapStatement}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
