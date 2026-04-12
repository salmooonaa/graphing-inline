import type { ResultsContent } from "@/types/content";

export const resultsContent: ResultsContent = {
  eyebrow: "Results",
  title: "Results",
  description:
    "Three findings first, then the relationship structure that connects where, why, and how.",
  keyFindings: [
    {
      id: "finding-rare",
      title: "Rare adoption",
      summary:
        "Word-scale graphics appear in only a small slice of the screened corpus.",
      metric: "0.6%",
      evidence:
        "718 unique papers and 909 use cases from a 126,797-paper corpus.",
    },
    {
      id: "finding-icons",
      title: "Icons dominate",
      summary:
        "Most observed use cases rely on icon-like forms rather than miniature charts.",
      metric: "79.5%",
      evidence: "723 of the 909 coded use cases use icons.",
    },
    {
      id: "finding-structure",
      title: "Structured co-occurrence",
      summary:
        "Where, why, and how move together instead of appearing independently.",
      metric: "p < 0.001",
      evidence:
        "All three pairwise tests are statistically significant across the corpus.",
    },
  ],
  explorer: {
    defaultTitle: "Where-Why-How Explorer",
    defaultSummary:
      "Focus any item to reveal the strongest relationships across placement, function, and representation.",
    defaultDetail:
      "The homepage synthesis emphasizes the dominant links: text aligns with visual indexing, tables align with semantic symbolizing and data annotation, and quantitative graphs cluster around data annotation in tables.",
    dimensions: [
      {
        id: "where",
        label: "Where",
        title: "Positioning",
        summary: "Where the graphic is placed in the paper.",
        items: [
          {
            id: "where-text",
            label: "Text",
            value: "65%",
            note: "591 cases",
            summary: "Most use cases sit in running text.",
            detail:
              "Text cases mainly support visual indexing, with icons carrying most of that work.",
          },
          {
            id: "where-table",
            label: "Table",
            value: "35%",
            note: "318 cases",
            summary: "A smaller but distinct share appears inside tables.",
            detail:
              "Table cases lean toward semantic symbolizing and data annotation, and they host disproportionately more data-driven graphics.",
          },
        ],
      },
      {
        id: "why",
        label: "Why",
        title: "Communicative Function",
        summary: "What the graphic is doing for nearby content.",
        items: [
          {
            id: "why-visual-indexing",
            label: "Visual Indexing",
            value: "45.1%",
            summary: "Graphics establish correspondence with nearby text or entities.",
            detail:
              "This is the largest function slice overall and is most associated with text placement and icon forms.",
          },
          {
            id: "why-semantic-symbolizing",
            label: "Semantic Symbolizing",
            value: "38.1%",
            summary: "Graphics reinforce a concept or semantic category.",
            detail:
              "This function is common in tables and still dominated by icons rather than chart-like forms.",
          },
          {
            id: "why-data-annotation",
            label: "Data Annotation",
            value: "16.8%",
            summary: "Graphics encode quantitative values associated with the text.",
            detail:
              "This is the smallest function slice, but it is the clearest bridge to quantitative graphs and tables.",
          },
        ],
      },
      {
        id: "how",
        label: "How",
        title: "Visual Representation",
        summary: "Which visual form is used to encode the signal.",
        items: [
          {
            id: "how-icons",
            label: "Icons",
            value: "79.5%",
            note: "723 cases",
            summary: "Icon-like marks dominate the representation space.",
            detail:
              "Icons dominate both contexts and remain the default form for visual indexing and semantic symbolizing.",
          },
          {
            id: "how-quantitative-graphs",
            label: "Quantitative Graphs",
            value: "15.8%",
            note: "144 cases",
            summary: "Miniature charts appear selectively rather than broadly.",
            detail:
              "Quantitative graphs align most strongly with data annotation and appear disproportionately in tables.",
          },
          {
            id: "how-typography",
            label: "Typography",
            value: "3.2%",
            note: "29 cases",
            summary: "Typography rarely carries the encoding itself.",
            detail:
              "This form is infrequent in the corpus and stays peripheral in the homepage synthesis.",
          },
          {
            id: "how-network-graphs",
            label: "Network Graphs",
            value: "1.4%",
            note: "13 cases",
            summary: "Relational mini-graphs are exceptional cases.",
            detail:
              "This representation remains rare and is preserved here as low-frequency evidence rather than a dominant pattern.",
          },
        ],
      },
    ],
    connections: [
      {
        from: "where-text",
        to: "why-visual-indexing",
        strength: "primary",
        explanation:
          "Text cases mainly support visual indexing.",
      },
      {
        from: "where-text",
        to: "how-icons",
        strength: "secondary",
        explanation:
          "Icons dominate text cases as the most common representation.",
      },
      {
        from: "where-table",
        to: "why-semantic-symbolizing",
        strength: "secondary",
        explanation:
          "Table cases lean toward semantic symbolizing.",
      },
      {
        from: "where-table",
        to: "why-data-annotation",
        strength: "primary",
        explanation:
          "Table cases lean toward data annotation.",
      },
      {
        from: "where-table",
        to: "how-quantitative-graphs",
        strength: "primary",
        explanation:
          "Data-driven graphics are disproportionately placed in tables.",
      },
      {
        from: "why-visual-indexing",
        to: "how-icons",
        strength: "primary",
        explanation:
          "Icons dominate visual indexing.",
      },
      {
        from: "why-semantic-symbolizing",
        to: "how-icons",
        strength: "primary",
        explanation:
          "Icons dominate semantic symbolizing.",
      },
      {
        from: "why-data-annotation",
        to: "how-quantitative-graphs",
        strength: "primary",
        explanation:
          "73.9% of data-annotation cases use quantitative graphs.",
      },
    ],
    definitions: [
      {
        term: "Where",
        description:
          "Whether the graphic appears in running text or inside tables.",
      },
      {
        term: "Why",
        description:
          "Whether it indexes, symbolizes, or annotates nearby content.",
      },
      {
        term: "How",
        description:
          "Whether it uses icons, quantitative graphs, network graphs, or typography.",
      },
    ],
  },
  dominantPatterns: {
    title: "Dominant Patterns",
    summary:
      "The strongest homepage-level combinations are organized by function share, then linked back to the explorer above.",
    items: [
      {
        id: "pattern-visual-indexing",
        rank: "01",
        title: "Text-led visual indexing",
        share: "45.1%",
        width: "45.1%",
        qualifier: "Largest function slice",
        summary:
          "The most common pattern is icon-based visual indexing embedded in running text.",
        evidence:
          "Visual indexing is the largest function slice; text cases mainly support it, and icons dominate this function.",
        connectedItemIds: [
          "where-text",
          "why-visual-indexing",
          "how-icons",
        ],
        pills: [
          { label: "Text", itemId: "where-text" },
          { label: "Visual Indexing", itemId: "why-visual-indexing" },
          { label: "Icons", itemId: "how-icons" },
        ],
      },
      {
        id: "pattern-semantic-symbolizing",
        rank: "02",
        title: "Table-leaning semantic symbolizing",
        share: "38.1%",
        width: "38.1%",
        qualifier: "Second-largest function slice",
        summary:
          "Semantic symbolizing frequently appears in tables and still relies on icons.",
        evidence:
          "Table cases lean toward semantic symbolizing, while icons dominate semantic symbolizing.",
        connectedItemIds: [
          "where-table",
          "why-semantic-symbolizing",
          "how-icons",
        ],
        pills: [
          { label: "Table", itemId: "where-table" },
          { label: "Semantic Symbolizing", itemId: "why-semantic-symbolizing" },
          { label: "Icons", itemId: "how-icons" },
        ],
      },
      {
        id: "pattern-data-annotation",
        rank: "03",
        title: "Table-based data annotation",
        share: "16.8%",
        width: "16.8%",
        qualifier: "Smallest but most distinctive slice",
        summary:
          "Data annotation is less common overall, but it is the clearest route to quantitative graphs.",
        evidence:
          "Table cases lean toward data annotation, and 73.9% of data-annotation cases use quantitative graphs.",
        connectedItemIds: [
          "where-table",
          "why-data-annotation",
          "how-quantitative-graphs",
        ],
        pills: [
          { label: "Table", itemId: "where-table" },
          { label: "Data Annotation", itemId: "why-data-annotation" },
          { label: "Quantitative Graphs", itemId: "how-quantitative-graphs" },
        ],
      },
    ],
  },
  distributions: {
    title: "Evidence by Dimension",
    summary:
      "Marginal distributions stay secondary: use them to inspect the slices after reading the main findings and patterns.",
    groups: [
      {
        id: "where",
        title: "Where distribution",
        summary: "Most use cases appear in running text rather than tables.",
        variant: "stacked",
        items: [
          {
            itemId: "where-text",
            label: "Text",
            value: "65%",
            width: "65%",
            note: "591 cases",
          },
          {
            itemId: "where-table",
            label: "Table",
            value: "35%",
            width: "35%",
            note: "318 cases",
          },
        ],
      },
      {
        id: "why",
        title: "Why distribution",
        summary:
          "Visual indexing leads, semantic symbolizing follows, and data annotation remains selective.",
        variant: "stacked",
        items: [
          {
            itemId: "why-visual-indexing",
            label: "Visual Indexing",
            value: "45.1%",
            width: "45.1%",
          },
          {
            itemId: "why-semantic-symbolizing",
            label: "Semantic Symbolizing",
            value: "38.1%",
            width: "38.1%",
          },
          {
            itemId: "why-data-annotation",
            label: "Data Annotation",
            value: "16.8%",
            width: "16.8%",
          },
        ],
      },
      {
        id: "how",
        title: "How distribution",
        summary:
          "Icons dominate the representation space, while chart-like and typographic forms stay small.",
        variant: "bars",
        items: [
          {
            itemId: "how-icons",
            label: "Icons",
            value: "79.5%",
            width: "79.5%",
            note: "723 cases",
          },
          {
            itemId: "how-quantitative-graphs",
            label: "Quantitative Graphs",
            value: "15.8%",
            width: "15.8%",
            note: "144 cases",
          },
          {
            itemId: "how-typography",
            label: "Typography",
            value: "3.2%",
            width: "3.2%",
            note: "29 cases",
          },
          {
            itemId: "how-network-graphs",
            label: "Network Graphs",
            value: "1.4%",
            width: "1.4%",
            note: "13 cases",
          },
        ],
      },
    ],
  },
  evidence: {
    title: "Statistical Evidence",
    summary:
      "Open the detail layer to inspect the pairwise tests, relation summaries, and corpus note.",
    pairs: [
      {
        id: "pair-where-why",
        label: "Where x Why",
        statistic: "chi^2(2)=340.56, p<0.001, V=0.612",
        summary: "Placement and function are tightly coupled.",
        detail:
          "Text cases mainly support visual indexing, while table cases lean toward semantic symbolizing and data annotation.",
        connectedItemIds: [
          "where-text",
          "where-table",
          "why-visual-indexing",
          "why-semantic-symbolizing",
          "why-data-annotation",
        ],
      },
      {
        id: "pair-why-how",
        label: "Why x How",
        statistic: "chi^2(6)=498.53, p<0.001, V=0.524",
        summary: "Function and visual form move together in structured ways.",
        detail:
          "Data annotation frequently uses quantitative graphs, while icons dominate visual indexing and semantic symbolizing.",
        connectedItemIds: [
          "why-visual-indexing",
          "why-semantic-symbolizing",
          "why-data-annotation",
          "how-icons",
          "how-quantitative-graphs",
        ],
      },
      {
        id: "pair-where-how",
        label: "Where x How",
        statistic: "chi^2(3)=82.38, p<0.001, V=0.301",
        summary: "Placement still shapes which representation appears.",
        detail:
          "Icons dominate both contexts, but data-driven graphics are disproportionately placed in tables.",
        connectedItemIds: [
          "where-text",
          "where-table",
          "how-icons",
          "how-quantitative-graphs",
        ],
      },
    ],
    notes: [
      "Final corpus: 718 unique papers and 909 distinct use cases drawn from 126,797 screened papers.",
      "All three pairwise tests are statistically significant at p < 0.001.",
      "Definitions stay in the explorer panel so the first reading pass stays conclusion-first.",
    ],
  },
};
