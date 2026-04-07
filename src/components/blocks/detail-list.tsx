import type { DetailItem } from "@/types/content";

type DetailListProps = {
  items: DetailItem[];
};

export function DetailList({ items }: DetailListProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            {`Item ${index + 1}`}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-950">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            {item.description}
          </p>
          {item.details?.length ? (
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
