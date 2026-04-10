import type { ProblemContent } from "@/types/content";

import { Container } from "@/components/ui/container";

type ProblemSectionProps = {
  content: ProblemContent;
};

/* ── neutral scholarly placeholder data ── */
const ROWS = [
  { label: "Item α", a: 0.71, b: 0.43 },
  { label: "Item β", a: 0.58, b: 0.51 },
  { label: "Item γ", a: 0.47, b: 0.33 },
  { label: "Item δ", a: 0.50, b: 0.45 },
  { label: "Item ε", a: 0.33, b: 0.24 },
] as const;

const MEAN = { a: 0.52, b: 0.39 };

function pct(a: number, b: number) {
  return Math.round((a / (a + b)) * 100);
}

/* ── stacked proportional bar (amber = Group A, blue = Group B) ── */
function StackedBar({ a, b }: { a: number; b: number }) {
  const p = pct(a, b);
  return (
    <div className="grid w-full grid-cols-[1.8rem_minmax(0,1fr)] items-center gap-1">
      <span
        className="text-right text-[0.5rem] font-medium tabular-nums text-[var(--muted-strong)]"
        style={{ fontFamily: "var(--font-data), monospace" }}
      >
        {p}%
      </span>
      <div
        className="flex w-full overflow-hidden rounded-[2px]"
        style={{
          height: 7,
          background: "rgba(23, 19, 15, 0.06)",
          boxShadow: "inset 0 0 0 1px rgba(23, 19, 15, 0.05)",
        }}
      >
        <div style={{ width: `${p}%`, height: "100%", background: "var(--amber)" }} />
        <div style={{ flex: 1, height: "100%", background: "var(--blue)" }} />
      </div>
    </div>
  );
}

/* ── shared table cell classes ── */
const TH =
  "pb-[7px] pt-1 px-2 first:pl-0 last:pr-0 text-left text-[0.6rem] font-medium uppercase tracking-[0.14em] text-[var(--muted)]";
const TD = "py-[5px] px-2 first:pl-0 last:pr-0 text-[0.74rem] text-[var(--foreground)]";
const BAR_TH =
  "pb-[7px] pt-1 px-1 text-center text-[0.6rem] font-medium uppercase tracking-[0.14em] text-[var(--muted)]";
const BAR_TD = "py-[5px] pl-1 pr-0 align-middle text-[0.74rem] text-[var(--foreground)]";
const BAR_COL = { width: "7.8rem" } as const;
const SIDE_NUM_COL = { width: "4.1rem" } as const;
const SIDE_NUM_TH = `${TH} whitespace-nowrap text-right`;
const NUM = "text-right tabular-nums";
const MONO: React.CSSProperties = { fontFamily: "var(--font-data), monospace" };
const MODULE_NOTE =
  "text-[0.74rem] leading-5 text-[var(--muted)] md:min-h-[2.5rem]";

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section className="border-b border-[var(--line)] py-10 sm:py-12">
      <Container>
        <div className="layout-module mx-auto space-y-5 sm:space-y-6">
          {/* ── header ── */}
          <div id="motivation" className="section-anchor">
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
          </div>

          {/* ── comparison figure ── */}
          <div className="section-reveal reveal-delay-1 w-full border border-[var(--line)] bg-white">
            <div className="grid md:grid-cols-2">

              {/* LEFT — conventional plain table */}
              <div className="flex h-full flex-col gap-4 border-b border-[var(--line)] p-5 sm:p-6 md:border-b-0 md:border-r">
                <p className="section-eyebrow">Conventional</p>

                <div className="flex flex-1 flex-col gap-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse" style={{ minWidth: 220 }}>
                      <thead>
                        <tr style={{ borderBottom: "1px solid var(--line-strong)" }}>
                          <th className={TH}>Study</th>
                          <th className={`${TH} text-right`}>Group A</th>
                          <th className={`${TH} text-right`}>A vs. B</th>
                          <th className={`${TH} text-right`}>Group B</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ROWS.map((row) => (
                          <tr key={row.label} style={{ borderBottom: "1px solid var(--line)" }}>
                            <td className={TD}>{row.label}</td>
                            <td className={`${TD} ${NUM}`} style={MONO}>
                              {row.a.toFixed(2)}
                            </td>
                            <td className={`${TD} ${NUM}`} style={MONO}>
                              {pct(row.a, row.b)}%
                            </td>
                            <td className={`${TD} ${NUM}`} style={MONO}>
                              {row.b.toFixed(2)}
                            </td>
                          </tr>
                        ))}
                        <tr style={{ borderTop: "1px solid var(--line-strong)" }}>
                          <td className={TD} style={{ fontWeight: 600 }}>Mean</td>
                          <td className={`${TD} ${NUM}`} style={{ ...MONO, fontWeight: 600 }}>
                            {MEAN.a.toFixed(2)}
                          </td>
                          <td className={`${TD} ${NUM}`} style={{ ...MONO, fontWeight: 600 }}>
                            {pct(MEAN.a, MEAN.b)}%
                          </td>
                          <td className={`${TD} ${NUM}`} style={{ ...MONO, fontWeight: 600 }}>
                            {MEAN.b.toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div aria-hidden="true" className="hidden min-h-[1rem] md:block" />
                </div>

                <p className={MODULE_NOTE}>
                  Comparison requires scanning across separate value columns.
                </p>
              </div>

              {/* RIGHT — WSG-enhanced table with embedded micro-bars */}
              <div className="flex h-full flex-col gap-4 p-5 sm:p-6">
                <p className="section-eyebrow">Word-scale enhanced</p>

                <div className="flex flex-1 flex-col gap-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse" style={{ minWidth: 240 }}>
                      <colgroup>
                        <col />
                        <col style={SIDE_NUM_COL} />
                        <col style={BAR_COL} />
                        <col style={SIDE_NUM_COL} />
                      </colgroup>
                      <thead>
                        <tr style={{ borderBottom: "1px solid var(--line-strong)" }}>
                          <th className={TH}>Study</th>
                          <th className={SIDE_NUM_TH}>Group A</th>
                          <th className={BAR_TH}>% A vs. B</th>
                          <th className={SIDE_NUM_TH}>Group B</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ROWS.map((row) => (
                          <tr key={row.label} style={{ borderBottom: "1px solid var(--line)" }}>
                            <td className={TD}>{row.label}</td>
                            <td className={`${TD} ${NUM}`} style={MONO}>
                              {row.a.toFixed(2)}
                            </td>
                            <td className={BAR_TD}>
                              <StackedBar a={row.a} b={row.b} />
                            </td>
                            <td className={`${TD} ${NUM}`} style={MONO}>
                              {row.b.toFixed(2)}
                            </td>
                          </tr>
                        ))}
                        <tr style={{ borderTop: "1px solid var(--line-strong)" }}>
                          <td className={TD} style={{ fontWeight: 600 }}>Mean</td>
                          <td className={`${TD} ${NUM}`} style={{ ...MONO, fontWeight: 600 }}>
                            {MEAN.a.toFixed(2)}
                          </td>
                          <td className={BAR_TD} style={{ fontWeight: 600 }}>
                            <StackedBar a={MEAN.a} b={MEAN.b} />
                          </td>
                          <td className={`${TD} ${NUM}`} style={{ ...MONO, fontWeight: 600 }}>
                            {MEAN.b.toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* colour legend */}
                  <div className="flex min-h-[1rem] items-center gap-4">
                    <div className="flex items-center gap-[5px]">
                      <div style={{ width: 10, height: 6, borderRadius: 1, background: "var(--amber)" }} />
                      <span className="text-[0.67rem] text-[var(--muted)]">Group A</span>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <div style={{ width: 10, height: 6, borderRadius: 1, background: "var(--blue)" }} />
                      <span className="text-[0.67rem] text-[var(--muted)]">Group B</span>
                    </div>
                  </div>
                </div>

                <p className={MODULE_NOTE}>
                  Embedded micro-bars keep proportions readable in place.
                </p>
              </div>
            </div>

            {/* ── research gap strip ── */}
            <div className="border-t border-[var(--line)] px-5 py-3.5 sm:px-6">
              <div className="max-w-[31rem] border-l border-[var(--line)] pl-3.5 sm:pl-4">
                <p className="section-eyebrow">Research Question</p>
                <p className="mt-1.5 text-[0.84rem] leading-5.5 text-[var(--foreground)] sm:text-[0.88rem]">
                  {content.researchQuestion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
