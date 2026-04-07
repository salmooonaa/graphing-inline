import type { ContactContent } from "@/types/content";

import { SectionShell } from "@/components/ui/section-shell";

type ContactSectionProps = {
  content: ContactContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <SectionShell
      id="contact"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {content.items.map((item) => (
          <article
            key={item.label}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="mt-3 inline-flex text-base font-medium text-slate-900 underline decoration-slate-300 underline-offset-4"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-3 text-base leading-7 text-slate-700">
                {item.value}
              </p>
            )}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
