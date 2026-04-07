import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: "Paper",
  title:
    "Graphing Inline: Understanding Word-scale Graphics Use in Scientific Papers",
  description:
    "A corpus study of 909 word-scale graphic use cases across 126,797 scientific papers, examining where they appear, why authors use them, and how they are visually represented.",
  status:
    "Public files are not linked yet; use the sections below for resource status, citation metadata, and contact information.",
  actions: [
    { label: "Paper", href: "#resources", variant: "primary" },
    { label: "Poster", href: "#resources", variant: "secondary" },
    { label: "BibTeX", href: "#citation", variant: "secondary" },
    { label: "Method", href: "#method", variant: "secondary" },
    { label: "Contact", href: "#contact", variant: "secondary" },
  ],
  metrics: [
    {
      value: "126,797",
      label: "scientific papers screened across the corpus",
    },
    {
      value: "909",
      label: "distinct word-scale graphic use cases analyzed",
    },
    {
      value: "0.6%",
      label: "of the collected papers contain word-scale graphics",
    },
  ],
  visual: {
    title: "Where-Why-How framework overview",
    caption:
      "The paper characterizes word-scale graphics through positioning, communicative function, and visual representation.",
    dimensions: [
      {
        label: "Where",
        subtitle: "Positioning",
        items: [
          { label: "Text", value: "65%" },
          { label: "Table", value: "35%" },
        ],
      },
      {
        label: "Why",
        subtitle: "Communicative Function",
        items: [
          { label: "Visual Indexing", value: "45.1%" },
          { label: "Semantic Symbolizing", value: "38.1%" },
          { label: "Data Annotation", value: "16.8%" },
        ],
      },
      {
        label: "How",
        subtitle: "Visual Representation",
        items: [
          { label: "Icons", value: "79.5%" },
          { label: "Quantitative Graphs", value: "15.8%" },
          { label: "Typography Text", value: "3.2%" },
          { label: "Network Graphs", value: "1.4%" },
        ],
      },
    ],
  },
};
