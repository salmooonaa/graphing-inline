import type {
  MotivationDemoSegment,
  MotivationDemoToken,
  ProblemContent,
  RichTextRun,
} from "@/types/content";

import { Container } from "@/components/ui/container";

type ProblemSectionProps = {
  content: ProblemContent;
};

function renderRun(run: RichTextRun, key: React.Key) {
  let node: React.ReactNode = run.text;
  if (run.italic) node = <em className="italic">{node}</em>;
  if (run.bold) node = <strong className="font-semibold">{node}</strong>;
  return <span key={key}>{node}</span>;
}

function RichText({ runs }: { runs: RichTextRun[] }) {
  return <>{runs.map((r, i) => renderRun(r, i))}</>;
}

function IconFigure() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="wsg-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="3.5" width="11" height="9" rx="0.5" />
      <path d="M4.5 10.5l2-2.5 2 1.6 2.6-3 1.4 1.9" />
      <circle cx="5.6" cy="6.2" r="0.85" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Sparkline({
  bars,
  direction,
}: {
  bars: number[];
  direction: "up" | "down";
}) {
  const max = Math.max(...bars, 1);
  const color = direction === "up" ? "var(--amber)" : "var(--blue)";
  return (
    <span className="wsg-sparkline" aria-hidden="true">
      {bars.map((v, i) => (
        <span
          key={i}
          className="wsg-sparkline__bar"
          style={{
            height: `${Math.max((v / max) * 100, 10)}%`,
            background: color,
          }}
        />
      ))}
    </span>
  );
}

function TokenWordScale({ token }: { token: MotivationDemoToken }) {
  const g = token.graphic;
  if (g.kind === "icon-figure") {
    return (
      <span className="wsg-token">
        {token.text}
        <IconFigure />
      </span>
    );
  }
  if (g.kind === "sparkline") {
    return (
      <span className="wsg-token">
        <Sparkline bars={g.bars} direction={g.direction} />
        {token.text}
      </span>
    );
  }
  return <span className="wsg-token wsg-smallcaps">{token.text}</span>;
}

function DemoProse({ segments }: { segments: MotivationDemoSegment[] }) {
  return (
    <p className="wsg-demo-prose">
      {segments.map((seg, i) =>
        seg.type === "run" ? (
          renderRun(
            { text: seg.text, italic: seg.italic, bold: seg.bold },
            `run-${i}`,
          )
        ) : (
          <TokenWordScale key={seg.id} token={seg} />
        ),
      )}
    </p>
  );
}

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
                <h2
                  className="layout-copy min-w-0 text-[1.85rem] leading-[1.08] tracking-[-0.028em] text-[var(--foreground)] sm:text-[2.2rem] sm:leading-[1.05]"
                >
                  <RichText runs={content.thesis} />
                </h2>
                <div aria-hidden="true" className="module-divider" />
              </div>
              <p className="layout-copy max-w-[36rem] text-[0.88rem] leading-6 text-[var(--muted)] sm:text-[0.94rem] sm:leading-7">
                {content.framing}
              </p>
            </div>
          </div>

          {/* Demo panel */}
          <div className="section-reveal reveal-delay-1 w-full border border-[var(--line)] bg-white p-5 sm:p-7">
            <DemoProse segments={content.demo.segments} />
          </div>

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
