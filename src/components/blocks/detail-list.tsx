import type { DetailItem } from "@/types/content";

type DetailListProps = {
  items: DetailItem[];
};

export function DetailList({ items }: DetailListProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="border-t border-[var(--line-strong)] bg-[var(--surface)] px-0 py-5"
        >
          <h3 className="text-2xl font-semibold text-slate-950">
            {item.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-700">
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
