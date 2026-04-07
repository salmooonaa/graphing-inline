import type { FindingsContent } from "@/types/content";

export const findingsContent: FindingsContent = {
  eyebrow: "Findings",
  title: "The corpus points to scarcity, icon dominance, and structured co-occurrence",
  description:
    "The paper does not treat word-scale graphics as isolated curiosities. It shows that prevalence is low, representation is uneven, and the three dimensions align in repeatable patterns.",
  conclusion:
    "The main result is not only that word-scale graphics are rare, but that when they do appear, they follow a structured design logic across positioning, function, and representation.",
  items: [
    {
      label: "01",
      conclusion: "Word-scale graphics are still rare in scientific papers.",
      explanation:
        "Only about 0.6% of the 126,797 collected papers contain word-scale graphics, indicating that adoption remains limited.",
      evidence: "Final corpus: 718 unique papers and 909 distinct use cases.",
    },
    {
      label: "02",
      conclusion: "Icons dominate the visual repertoire.",
      explanation:
        "Icons account for 79.5% of all use cases and appear in four of the five most common usage combinations in the corpus.",
      evidence: "They dominate in both text and table contexts.",
    },
    {
      label: "03",
      conclusion: "Quantitative graphs align with tables and data annotation.",
      explanation:
        "Data annotation frequently uses quantitative graphs, and quantitative graphs appear much more often in tables than in running text.",
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
    title: "Representation and prevalence",
    caption:
      "Findings figure 1. Word-scale graphics are uncommon overall, while icons account for the large majority of the observed visual forms.",
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
    title: "Association strengths across where, why, and how",
    caption:
      "Findings figure 2. All pairwise associations are significant, with the strongest relationship observed between positioning and communicative function.",
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
