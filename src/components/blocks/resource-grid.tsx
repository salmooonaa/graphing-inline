import type { ResourceItem } from "@/types/content";

import { StatusBadge } from "@/components/ui/status-badge";

type ResourceGridProps = {
  items: ResourceItem[];
};

export function ResourceGrid({ items }: ResourceGridProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const body = (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Resource
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  {item.name}
                </h3>
              </div>
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
            className="block border-t border-slate-300 bg-white px-0 py-5 transition-colors hover:text-slate-950"
          >
            {body}
          </a>
        ) : (
          <article
            key={item.name}
            className="border-t border-slate-300 bg-white px-0 py-5"
          >
            {body}
          </article>
        );
      })}
    </div>
  );
}
