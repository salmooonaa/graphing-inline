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
      className="inline-flex items-center border border-slate-300 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-700 transition-colors hover:border-slate-950 hover:text-slate-950"
    >
      {copied ? "Copied" : "Copy BibTeX"}
    </button>
  );
}
