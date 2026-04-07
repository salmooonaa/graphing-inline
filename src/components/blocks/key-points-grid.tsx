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
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          {item.value ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              {item.value}
            </p>
          ) : null}
          <h3 className="mt-3 text-xl font-semibold text-slate-950">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
