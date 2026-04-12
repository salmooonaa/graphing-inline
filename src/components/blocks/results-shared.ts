import type { ResultsDimensionId } from "@/types/content";

export const dimensionTheme = {
  where: {
    accent: "var(--blue)",
    line: "var(--blue-line)",
    wash: "rgba(77, 101, 128, 0.08)",
    soft: "rgba(77, 101, 128, 0.05)",
  },
  why: {
    accent: "var(--amber)",
    line: "var(--amber-line)",
    wash: "rgba(155, 106, 40, 0.08)",
    soft: "rgba(155, 106, 40, 0.05)",
  },
  how: {
    accent: "var(--green)",
    line: "var(--green-line)",
    wash: "rgba(75, 105, 92, 0.08)",
    soft: "rgba(75, 105, 92, 0.05)",
  },
} as const;
