import type { AssociationPair, QuantifiedItem } from "@/types/content";

import { FigureCaption } from "@/components/blocks/figure-caption";

type QuantifiedFigureProps = {
  title: string;
  caption: string;
  items: QuantifiedItem[];
};

export function QuantifiedFigure({
  title,
  caption,
  items,
}: QuantifiedFigureProps) {
  return (
    <figure className="border border-[var(--line)] bg-white p-5 sm:p-6">
      <dl className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <dt className="text-[0.86rem] text-[var(--muted)]">{item.label}</dt>
              <dd className="text-[0.86rem] font-semibold text-[var(--foreground)]">
                {item.value}
              </dd>
            </div>
            <div className="h-2 bg-black/8">
              <div
                className="h-full bg-[var(--foreground)]"
                style={{ width: item.width }}
              />
            </div>
            {item.note ? (
              <p className="text-[0.72rem] leading-5 text-[var(--muted)]">{item.note}</p>
            ) : null}
          </div>
        ))}
      </dl>

      <div className="mt-4.5">
        <FigureCaption title={title} caption={caption} />
      </div>
    </figure>
  );
}

type AssociationFigureProps = {
  title: string;
  caption: string;
  pairs: AssociationPair[];
};

export function AssociationFigure({
  title,
  caption,
  pairs,
}: AssociationFigureProps) {
  return (
    <figure className="border border-[var(--line)] bg-white p-5 sm:p-6">
      <div className="space-y-4">
        {pairs.map((pair) => (
          <section key={pair.label} className="border-t border-[var(--line)] pt-4">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-[0.98rem] font-semibold text-[var(--foreground)]">
                {pair.label}
              </h3>
              <p className="text-[0.72rem] text-[var(--muted)]">{pair.statistic}</p>
            </div>
            <div className="mt-3 h-2 bg-black/8">
              <div
                className="h-full bg-[var(--foreground)]"
                style={{ width: pair.width }}
              />
            </div>
            <p className="mt-2.5 text-[0.9rem] leading-6 text-[var(--muted)]">
              {pair.explanation}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-4.5">
        <FigureCaption title={title} caption={caption} />
      </div>
    </figure>
  );
}
