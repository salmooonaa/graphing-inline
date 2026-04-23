import type { ResultsContent } from "@/types/content";

export const resultsContent: ResultsContent = {
  eyebrow: "Results",
  title: "Results",
  description:
    "Our where–why–how framework and the corpus distribution across each dimension of word-scale graphics.",
  meta: {
    sampleSize: "909",
    corpus: "126,797 papers screened → 718 with word-scale graphics",
    coding:
      "Single-label coding per axis — percentages within each dimension sum to 100",
  },
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
          definition: "Graphics that appear embedded in text descriptions of scientific papers.",
          insight:
            "Text most strongly aligns with visual indexing and icon forms.",
        },
        {
          id: "where-table",
          label: "Table",
          value: "35%",
          count: "318 cases",
          definition: "Graphics that appear embedded in tables of scientific papers.",
          insight:
            "Tables more often align with semantic symbolizing, data annotation, and quantitative graphs.",
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
          count: "410 cases",
          definition: "Graphics that serve the purpose of establishing a visual correspondence with a specific visual or textual entity mentioned in the text descriptions.",
          insight:
            "This is the largest function slice and it connects most strongly to text and icons.",
        },
        {
          id: "why-semantic-symbolizing",
          label: "Semantic Symbolizing",
          value: "38.1%",
          count: "346 cases",
          definition: "Graphics that serve as visual aids to symbolize specific concepts, thereby reinforcing the text description to enhance reader comprehension.",
          insight:
            "This function is table-leaning but still dominated by icons.",
        },
        {
          id: "why-data-annotation",
          label: "Data Annotation",
          value: "16.8%",
          count: "153 cases",
          definition: "Graphics designed to allow direct extraction of data that directly encode quantitative data associated with texts.",
          insight:
            "This is the clearest bridge from function to quantitative graphs and table use.",
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
          definition: "Graphics that typically adopt stylized visual forms of objects designed to evoke semantic associations.",
          insight:
            "Icons dominate both contexts and are the default form for visual indexing and semantic symbolizing.",
        },
        {
          id: "how-quantitative-graphs",
          label: "Quantitative Graphs",
          value: "15.8%",
          count: "144 cases",
          definition: "Graphics in which numeric data are encoded through certain visual channels (e.g., length, angle), usually containing an implicit coordinate system.",
          insight:
            "Quantitative graphs cluster around data annotation and appear disproportionately in tables.",
        },
        {
          id: "how-network-graphs",
          label: "Network Graphs",
          value: "1.4%",
          count: "13 cases",
          definition: "Graphics that represent relational structures such as node-link diagrams to enhance the perception of relationships.",
          insight:
            "Network graphs are rare edge cases rather than dominant forms.",
        },
        {
          id: "how-typography",
          label: "Typography",
          value: "3.2%",
          count: "29 cases",
          definition: "Graphics that encode texts with certain visual encodings (e.g., color) to create consistent visual linkages within the document scope.",
          insight:
            "Typography remains peripheral compared with icons and quantitative graphs.",
        },
      ],
    },
  ],
};
