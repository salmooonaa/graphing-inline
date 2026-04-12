import type { ResultsContent } from "@/types/content";

export const resultsContent: ResultsContent = {
  eyebrow: "Results",
  title: "Results",
  description:
    "A single 3W board for seeing the main findings first and opening deeper evidence only when needed.",
  badges: [
    {
      id: "badge-rare",
      label: "Rare adoption",
      value: "0.6%",
    },
    {
      id: "badge-icons",
      label: "Icons dominate",
      value: "79.5%",
    },
    {
      id: "badge-structure",
      label: "Structured relationships",
      value: "Click nodes to explore",
    },
  ],
  axes: [
    {
      id: "where",
      label: "Where",
      items: [
        {
          id: "where-text",
          label: "Text",
          value: "65%",
          count: "591 cases",
          definition: "Word-scale graphics embedded in running text.",
          insight: "Text most strongly aligns with visual indexing and icon forms.",
        },
        {
          id: "where-table",
          label: "Table",
          value: "35%",
          count: "318 cases",
          definition: "Word-scale graphics embedded inside tables.",
          insight: "Tables more often align with semantic symbolizing, data annotation, and quantitative graphs.",
        },
      ],
    },
    {
      id: "why",
      label: "Why",
      items: [
        {
          id: "why-visual-indexing",
          label: "Visual Indexing",
          value: "45.1%",
          definition: "Graphics point readers to nearby text or entities.",
          insight: "This is the largest function slice and it connects most strongly to text and icons.",
        },
        {
          id: "why-semantic-symbolizing",
          label: "Semantic Symbolizing",
          value: "38.1%",
          definition: "Graphics reinforce a concept or semantic category.",
          insight: "This function is table-leaning but still dominated by icons.",
        },
        {
          id: "why-data-annotation",
          label: "Data Annotation",
          value: "16.8%",
          definition: "Graphics encode quantitative values tied to nearby content.",
          insight: "This is the clearest bridge from function to quantitative graphs and table use.",
        },
      ],
    },
    {
      id: "how",
      label: "How",
      items: [
        {
          id: "how-icons",
          label: "Icons",
          value: "79.5%",
          count: "723 cases",
          definition: "Icon-like marks such as shapes, marks, or compact symbols.",
          insight: "Icons dominate both contexts and are the default form for visual indexing and semantic symbolizing.",
        },
        {
          id: "how-quantitative-graphs",
          label: "Quantitative Graphs",
          value: "15.8%",
          count: "144 cases",
          definition: "Miniature quantitative charts such as bars, lines, or encoded marks.",
          insight: "Quantitative graphs cluster around data annotation and appear disproportionately in tables.",
        },
        {
          id: "how-network-graphs",
          label: "Network Graphs",
          value: "1.4%",
          count: "13 cases",
          definition: "Compact relational graph structures.",
          insight: "Network graphs are rare edge cases rather than dominant forms.",
        },
        {
          id: "how-typography",
          label: "Typography",
          value: "3.2%",
          count: "29 cases",
          definition: "Typography itself carries the visual encoding.",
          insight: "Typography remains peripheral compared with icons and quantitative graphs.",
        },
      ],
    },
  ],
  connections: [
    {
      from: "where-text",
      to: "why-visual-indexing",
      strength: "primary",
      summary: "Text most strongly aligns with visual indexing.",
    },
    {
      from: "where-text",
      to: "how-icons",
      strength: "secondary",
      summary: "Icons dominate text use cases.",
    },
    {
      from: "where-table",
      to: "why-semantic-symbolizing",
      strength: "secondary",
      summary: "Tables lean toward semantic symbolizing.",
    },
    {
      from: "where-table",
      to: "why-data-annotation",
      strength: "primary",
      summary: "Tables most strongly align with data annotation.",
    },
    {
      from: "where-table",
      to: "how-quantitative-graphs",
      strength: "primary",
      summary: "Quantitative graphs are disproportionately placed in tables.",
    },
    {
      from: "why-visual-indexing",
      to: "how-icons",
      strength: "primary",
      summary: "Icons dominate visual indexing.",
    },
    {
      from: "why-semantic-symbolizing",
      to: "how-icons",
      strength: "primary",
      summary: "Icons dominate semantic symbolizing.",
    },
    {
      from: "why-data-annotation",
      to: "how-quantitative-graphs",
      strength: "primary",
      summary: "73.9% of data-annotation cases use quantitative graphs.",
    },
  ],
  defaultPanel: {
    title: "Structured relationships across 3W",
    definition: "The board starts from findings, not definitions: adoption is rare, icons dominate, and the three dimensions move together.",
    strongestLink: "Click any node to reveal the strongest related categories.",
    insight: "Text tends toward visual indexing and icons, while tables are where data annotation and quantitative graphs most clearly cluster.",
  },
};
