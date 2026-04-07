import type { FindingsContent } from "@/types/content";

export const findingsContent: FindingsContent = {
  eyebrow: "Findings",
  title: "Quantitative findings from the corpus",
  description:
    "The paper reports corpus-scale observations that characterize how word-scale graphics appear in practice.",
  items: [
    {
      value: "718",
      title: "Unique papers",
      description:
        "The study reports 718 unique papers that contain relevant use cases.",
    },
    {
      value: "909",
      title: "Distinct use cases",
      description:
        "The corpus analysis identifies 909 distinct instances of word-scale graphics use.",
    },
    {
      value: "0.6%",
      title: "Observed prevalence",
      description:
        "The paper reports that word-scale graphics appear in a small fraction of papers within the studied set.",
    },
    {
      title: "Dominant visual form",
      description:
        "Icons are highlighted as a dominant representation in the observed corpus.",
    },
    {
      title: "Structured associations",
      description:
        "The findings point to relationships between text or table contexts and communicative function.",
    },
  ],
};
