import type { ResultsContent, ResultsDimensionId } from "@/types/content";

const AXIS_STYLES: Record<
  ResultsDimensionId,
  { accent: string; tint: string; bar: string }
> = {
  where: {
    accent: "var(--amber)",
    tint: "rgba(254,243,199,0.18)",
    bar: "rgba(217,119,6,0.7)",
  },
  why: {
    accent: "var(--blue)",
    tint: "rgba(219,234,254,0.20)",
    bar: "rgba(59,130,246,0.7)",
  },
  how: {
    accent: "var(--green)",
    tint: "rgba(209,250,229,0.18)",
    bar: "rgba(16,185,129,0.7)",
  },
};

function parsePct(value: string): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : 0;
}

function parseCount(count: string | undefined): string | null {
  if (!count) return null;
  const match = count.match(/([\d,]+)/);
  return match ? match[1] : null;
}

function WordScaleBar({ pct, color }: { pct: number; color: string }) {
  const clamped = Math.max(0, Math.min(100, pct));
  return (
    <span
      aria-hidden="true"
      className="relative inline-block h-[7px] w-full overflow-hidden rounded-[2px] bg-[var(--line)] align-middle"
    >
      <span
        className="absolute inset-y-0 left-0 rounded-[2px]"
        style={{ width: `${clamped}%`, backgroundColor: color }}
      />
    </span>
  );
}

export function ResultsBoard({ content }: { content: ResultsContent }) {
  return (
    <div className="flex flex-col gap-6 sm:gap-7">
      <div className="section-reveal">
        <h2 className="text-[1.85rem] leading-[1.08] tracking-[-0.028em] text-[var(--foreground)] sm:text-[2.2rem] sm:leading-[1.05]">
          {content.title}
        </h2>
        <p className="mt-3 text-[0.88rem] leading-6 text-[var(--muted)] sm:text-[0.94rem] sm:leading-7">
          {content.description}
        </p>
      </div>

      <div className="section-reveal reveal-delay-1">
        <div className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--background)] px-4 py-4 sm:px-6 sm:py-5">
          <table className="w-full border-separate border-spacing-0 text-left">
            <thead>
              <tr className="text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                <th
                  scope="col"
                  className="border-b border-[var(--line)] pb-2 pl-1 pr-3 font-medium"
                >
                  Dimension
                </th>
                <th
                  scope="col"
                  className="border-b border-[var(--line)] pb-2 pr-3 font-medium"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="border-b border-[var(--line)] pb-2 pr-2 text-right font-medium"
                >
                  Share
                </th>
                <th
                  scope="col"
                  className="border-b border-[var(--line)] pb-2 pr-3 font-medium"
                >
                  <span className="sr-only">Proportion</span>
                </th>
                <th
                  scope="col"
                  className="hidden border-b border-[var(--line)] pb-2 pr-1 text-right font-medium sm:table-cell"
                >
                  N
                </th>
              </tr>
            </thead>
            <tbody>
              {content.axes.map((axis, axisIndex) => {
                const styles = AXIS_STYLES[axis.id];
                const items = axis.items;
                const groupTopBorder =
                  axisIndex === 0
                    ? "border-t-0"
                    : "border-t border-[var(--line-strong)]";

                return items.map((node, rowIndex) => {
                  const pct = parsePct(node.value);
                  const isFirst = rowIndex === 0;
                  const isLast = rowIndex === items.length - 1;
                  const rowBorder = isLast
                    ? ""
                    : "border-b border-[var(--line)]";
                  const nCount = parseCount(node.count);

                  return (
                    <tr
                      key={node.id}
                      style={{ backgroundColor: styles.tint }}
                    >
                      {isFirst ? (
                        <th
                          scope="rowgroup"
                          rowSpan={items.length}
                          className={`${groupTopBorder} align-top pl-3 pr-4 pt-3.5 pb-3.5`}
                          style={{
                            borderLeft: `2px solid ${styles.accent}`,
                          }}
                        >
                          <span className="section-eyebrow whitespace-nowrap">
                            {axis.label}
                          </span>
                        </th>
                      ) : null}

                      <td
                        className={`${isFirst ? groupTopBorder : ""} ${rowBorder} py-2.5 pr-3 align-top`}
                      >
                        <details className="group relative">
                          <summary className="inline-flex cursor-help list-none items-baseline gap-1 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                            <span className="border-b border-dashed border-[var(--muted)] text-[0.82rem] leading-5 text-[var(--foreground)]">
                              {node.label}
                            </span>
                            <span
                              aria-hidden="true"
                              className="inline-flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full border border-[var(--muted)] text-[0.55rem] leading-none text-[var(--muted)]"
                            >
                              i
                            </span>
                            <span className="inline-flex h-4 w-4 items-center justify-center text-[0.72rem] leading-none text-[var(--muted)] transition-transform duration-150 group-open:rotate-45 md:hidden">
                              +
                            </span>
                          </summary>
                          <p className="mt-1 text-[0.72rem] leading-5 text-[var(--muted)] md:hidden">
                            {node.definition}
                          </p>
                          <div className="pointer-events-none absolute left-0 top-full z-10 mt-1 hidden w-72 border border-[var(--line)] bg-white px-3 py-2 text-[0.7rem] leading-5 text-[var(--muted)] shadow-[0_4px_16px_rgba(23,19,15,0.06)] md:group-hover:block md:group-focus-within:block">
                            {node.definition}
                          </div>
                        </details>
                      </td>

                      <td
                        className={`${isFirst ? groupTopBorder : ""} ${rowBorder} py-2.5 pr-2 text-right align-middle`}
                      >
                        <span className="font-[var(--font-data)] text-[0.82rem] tabular-nums text-[var(--foreground)]">
                          {node.value}
                        </span>
                      </td>

                      <td
                        className={`${isFirst ? groupTopBorder : ""} ${rowBorder} py-2.5 pr-3 align-middle`}
                      >
                        <div className="w-[56px] sm:w-[96px]">
                          <WordScaleBar pct={pct} color={styles.bar} />
                        </div>
                      </td>

                      <td
                        className={`${isFirst ? groupTopBorder : ""} ${rowBorder} hidden py-2.5 pr-1 text-right align-middle sm:table-cell`}
                      >
                        <span className="font-[var(--font-data)] text-[0.76rem] tabular-nums text-[var(--muted)]">
                          {nCount ?? "—"}
                        </span>
                      </td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>

        {content.meta ? (
          <p className="mt-3 text-[0.72rem] leading-5 text-[var(--muted)]">
            <span className="font-[var(--font-data)] tabular-nums">
              N = {content.meta.sampleSize}
            </span>{" "}
            word-scale graphics · {content.meta.coding} · Corpus:{" "}
            {content.meta.corpus}
          </p>
        ) : null}
      </div>
    </div>
  );
}
