"use client";

import { useState } from "react";

type CopyBibtexButtonProps = {
  value: string;
};

export function CopyBibtexButton({ value }: CopyBibtexButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center border border-[var(--line-strong)] bg-white/78 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
    >
      {copied ? "Copied" : "Copy BibTeX"}
    </button>
  );
}
