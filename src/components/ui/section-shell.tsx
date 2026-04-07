import type { ReactNode } from "react";

import { SectionIntro } from "@/components/blocks/section-intro";
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
        "scroll-mt-24 border-t border-[var(--line)] py-16 sm:py-20",
        className,
      )}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <SectionIntro
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="lg:pr-8"
          />
          <div>{children}</div>
        </div>
      </Container>
    </section>
  );
}
