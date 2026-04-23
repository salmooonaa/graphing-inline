import type { ResultsContent } from "@/types/content";

const AXIS_STYLES: Record<string, { tint: string; bar: string }> = {
  where: { tint: "rgba(254,243,199,0.22)", bar: "rgba(217,119,6,0.55)" },
  why: { tint: "rgba(219,234,254,0.22)", bar: "rgba(59,130,246,0.55)" },
  how: { tint: "rgba(209,250,229,0.22)", bar: "rgba(16,185,129,0.55)" },
};

function AxisItemRow({
  node,
  pct,
  barColor,
}: {
  node: ResultsContent["axes"][number]["items"][number];
  pct: number;
  barColor: string;
}) {
  return (
    <article className="group relative border-b border-[var(--line)] last:border-b-0">
      <details className="group">
        <summary className="min-h-10 cursor-pointer list-none py-2.5 text-left focus-visible:outline-none [&::-webkit-details-marker]:hidden">
          <div className="flex items-baseline justify-between gap-3">
            <p className="min-w-0 text-[0.78rem] leading-5 text-[var(--foreground)]">
              {node.label}
            </p>
            <div className="flex shrink-0 items-baseline gap-2">
              <span className="font-[var(--font-data)] text-[0.82rem] tabular-nums text-[var(--amber)]">
                {node.value}
              </span>
              <span className="flex h-4 w-4 items-center justify-center text-[0.72rem] leading-none text-[var(--muted)] transition-transform duration-150 group-open:rotate-45 md:hidden">
                +
              </span>
            </div>
          </div>
          <div className="mt-1.5 h-[3px] w-full overflow-hidden rounded-full bg-[var(--line)]">
            <div
              className="h-full rounded-full"
              style={{ width: `${pct}%`, backgroundColor: barColor }}
            />
          </div>
        </summary>

        <div className="pb-3 pt-0.5 md:hidden">
          <p className="text-[0.72rem] leading-5 text-[var(--muted)]">
            {node.definition}
          </p>
        </div>

        <div className="pointer-events-none absolute left-0 top-full z-10 mt-1 hidden w-56 border border-[var(--line)] bg-white px-3 py-2 text-[0.7rem] leading-5 text-[var(--muted)] shadow-[0_4px_16px_rgba(23,19,15,0.06)] md:group-hover:block md:group-focus-within:block">
          {node.definition}
        </div>
      </details>
    </article>
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

      <div className="section-reveal reveal-delay-1 grid divide-y divide-[var(--line)] border-y border-[var(--line)] md:grid-cols-3 md:divide-x md:divide-y-0">
        {content.axes.map((axis) => {
          const styles = AXIS_STYLES[axis.id] ?? {
            tint: "transparent",
            bar: "var(--amber)",
          };
          const maxPct = Math.max(
            ...axis.items.map((item) => parseFloat(item.value) || 0),
            0.0001,
          );
          return (
            <section
              key={axis.id}
              className="py-4 md:px-5 md:first:pl-0 md:last:pr-0"
              style={{ backgroundColor: styles.tint }}
            >
              <p className="section-eyebrow">{axis.label}</p>
              <div className="mt-3 flex flex-col">
                {axis.items.map((node) => {
                  const value = parseFloat(node.value) || 0;
                  const pct = (value / maxPct) * 100;
                  return (
                    <AxisItemRow
                      key={node.id}
                      node={node}
                      pct={pct}
                      barColor={styles.bar}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
