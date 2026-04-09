import type { FindingsContent } from "@/types/content";

export const findingsContent: FindingsContent = {
  eyebrow: "Results",
  title: "Strongest Findings",
  description:
    "The corpus points to rarity, icon dominance, and structured relationships.",
  conclusion:
    "Word-scale graphics are rare, but their use follows a repeatable logic.",
  items: [
    {
      label: "01",
      conclusion: "Word-scale graphics are still rare.",
      explanation:
        "Only about 0.6% of the 126,797 collected papers contain them.",
      evidence: "Final corpus: 718 unique papers and 909 distinct use cases.",
    },
    {
      label: "02",
      conclusion: "Icons dominate the visual repertoire.",
      explanation:
        "Icons account for 79.5% of all use cases.",
      evidence: "They dominate in both text and table contexts.",
    },
    {
      label: "03",
      conclusion: "Quantitative graphs align with tables and data annotation.",
      explanation:
        "Data annotation and table contexts are where quantitative forms appear most often.",
      evidence:
        "73.9% within data annotation use quantitative graphs; 98 table cases versus 46 text cases.",
    },
    {
      label: "04",
      conclusion: "The three dimensions co-occur in structured ways.",
      explanation:
        "All pairwise relationships are statistically significant, showing that where, why, and how are not independent choices.",
      evidence:
        "The paper reports moderate-to-substantial associations across all dimension pairs.",
    },
  ],
  representationFigure: {
    title: "Representation Distribution",
    caption:
      "Corpus prevalence across representation types.",
    items: [
      {
        label: "Papers using word-scale graphics",
        value: "0.6%",
        width: "0.6%",
        note: "Share of the 126,797-paper corpus.",
      },
      {
        label: "Icons",
        value: "79.5%",
        width: "79.5%",
        note: "723 use cases across the integrated corpus.",
      },
      {
        label: "Quantitative Graphs",
        value: "15.8%",
        width: "15.8%",
        note: "144 use cases.",
      },
      {
        label: "Typography",
        value: "3.2%",
        width: "3.2%",
        note: "29 use cases.",
      },
      {
        label: "Network Graphs",
        value: "1.4%",
        width: "1.4%",
        note: "13 use cases.",
      },
    ],
  },
  associationFigure: {
    title: "Dimension Associations",
    caption:
      "Pairwise relationships across where, why, and how.",
    pairs: [
      {
        label: "Where × Why",
        statistic: "χ²(2)=340.56, p<0.001, V=0.612",
        width: "61.2%",
        explanation:
          "Text cases mainly support visual indexing, while table cases lean toward semantic symbolizing and data annotation.",
      },
      {
        label: "Why × How",
        statistic: "χ²(6)=498.53, p<0.001, V=0.524",
        width: "52.4%",
        explanation:
          "Data annotation frequently uses quantitative graphs, while icons dominate visual indexing and semantic symbolizing.",
      },
      {
        label: "Where × How",
        statistic: "χ²(3)=82.38, p<0.001, V=0.301",
        width: "30.1%",
        explanation:
          "Icons dominate both contexts, but data-driven graphics are disproportionately placed in tables.",
      },
    ],
  },
};
