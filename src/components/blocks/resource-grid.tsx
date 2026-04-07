import type { ResourceItem } from "@/types/content";

import { StatusBadge } from "@/components/ui/status-badge";

type ResourceGridProps = {
  items: ResourceItem[];
};

export function ResourceGrid({ items }: ResourceGridProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map((item) => {
        const body = (
          <>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-950">{item.name}</h3>
              <StatusBadge status={item.status} />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {item.description}
            </p>
          </>
        );

        return item.href ? (
          <a
            key={item.name}
            href={item.href}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            {body}
          </a>
        ) : (
          <article
            key={item.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            {body}
          </article>
        );
      })}
    </div>
  );
}
