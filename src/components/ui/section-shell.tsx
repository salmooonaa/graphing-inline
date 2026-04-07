import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-t border-slate-200/80 py-16 sm:py-20",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          <p className="text-base leading-8 text-slate-700 sm:text-lg">
            {description}
          </p>
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
