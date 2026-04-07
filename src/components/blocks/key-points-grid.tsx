import type { HighlightItem } from "@/types/content";

type KeyPointsGridProps = {
  items: HighlightItem[];
};

export function KeyPointsGrid({ items }: KeyPointsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={`${item.title}-${item.value ?? "detail"}`}
          className="border-t border-[var(--line-strong)] bg-[var(--surface)] px-0 py-5"
        >
          {item.value ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              {item.value}
            </p>
          ) : null}
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">
            {item.title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-700">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
