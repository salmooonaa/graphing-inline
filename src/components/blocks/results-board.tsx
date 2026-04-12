import type { ResultsContent } from "@/types/content";

import { dimensionTheme } from "@/components/blocks/results-shared";
import { cn } from "@/lib/utils";

function AxisNodeButton({
  node,
  dimensionId,
}: {
  node: ResultsContent["axes"][number]["items"][number];
  dimensionId: ResultsContent["axes"][number]["id"];
}) {
  const theme = dimensionTheme[dimensionId];

  return (
    <article
      title={node.definition}
      tabIndex={0}
      className={cn(
        "group relative w-full rounded-[1rem] border px-3 py-3 text-left transition duration-150",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]",
      )}
      style={{
        borderColor: theme.line,
        backgroundColor: "white",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p
            className="text-[0.75rem] uppercase tracking-[0.18em]"
            style={{ color: "var(--foreground)" }}
          >
            {node.label}
          </p>
        </div>
        <span className="shrink-0 text-[0.82rem] font-semibold text-[var(--foreground)]">
          {node.value}
        </span>
      </div>

      <div
        className="pointer-events-none absolute left-0 top-full z-10 mt-2 hidden w-56 rounded-[0.9rem] border border-[var(--line)] bg-white px-3 py-2 text-[0.7rem] leading-5 text-[var(--muted)] shadow-[0_12px_30px_rgba(23,19,15,0.08)] md:group-hover:block md:group-focus-visible:block"
      >
        {node.definition}
      </div>
    </article>
  );
}

export function ResultsBoard({ content }: { content: ResultsContent }) {
  return (
    <article className="section-reveal rounded-[1.6rem] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,rgba(236,239,243,0.38))] p-4 sm:p-5 lg:p-6">
      <div className="flex flex-col gap-3.5">
        <div className="space-y-2">
          <p className="section-eyebrow">{content.eyebrow}</p>
          <div className="max-w-2xl">
            <h2 className="text-[1.9rem] leading-[1] text-[var(--foreground)] sm:text-[2.2rem]">
              {content.title}
            </h2>
            <p className="mt-2 text-[0.86rem] leading-5.5 text-[var(--muted)] sm:text-[0.92rem] sm:leading-6">
              {content.description}
            </p>
          </div>
        </div>

        <div className="rounded-[1.3rem] border border-[var(--line)] bg-white p-4 sm:p-5">
          <div className="grid gap-3 md:grid-cols-3">
            {content.axes.map((axis) => (
              <section
                key={axis.id}
                className="rounded-[1.1rem] border p-3.5"
                style={{
                  borderColor: dimensionTheme[axis.id].line,
                  backgroundColor: dimensionTheme[axis.id].soft,
                }}
              >
                <p
                  className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.22em]"
                  style={{ color: dimensionTheme[axis.id].accent }}
                >
                  {axis.label}
                </p>
                <div className="mt-3 space-y-2.5">
                  {axis.items.map((node) => (
                    <AxisNodeButton
                      key={node.id}
                      node={node}
                      dimensionId={axis.id}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
