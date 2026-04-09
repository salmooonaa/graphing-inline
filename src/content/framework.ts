import type { FrameworkContent } from "@/types/content";

export const frameworkContent: FrameworkContent = {
  eyebrow: "Framework",
  title: "",
  description:
    "A compact lens for position, function, and representation.",
  conclusion:
    "The framework turns scattered examples into a comparable design language.",
  figureCaption:
    "Position, function, and representation across the corpus.",
  dimensions: [
    {
      label: "Where",
      title: "Positioning",
      conclusion:
        "Word-scale graphics appear either in running text or inside tables.",
      items: [
        {
          label: "Text",
          value: "65%",
          width: "65%",
          note: "591 use cases appear embedded in text descriptions.",
        },
        {
          label: "Table",
          value: "35%",
          width: "35%",
          note: "318 use cases appear embedded in tables.",
        },
      ],
    },
    {
      label: "Why",
      title: "Communicative function",
      conclusion:
        "Most cases help readers index content, symbolize concepts, or annotate data.",
      items: [
        {
          label: "Visual Indexing",
          value: "45.1%",
          width: "45.1%",
          note: "Graphics establish correspondence with nearby text or visual entities.",
        },
        {
          label: "Semantic Symbolizing",
          value: "38.1%",
          width: "38.1%",
          note: "Graphics reinforce a concept or semantic category.",
        },
        {
          label: "Data Annotation",
          value: "16.8%",
          width: "16.8%",
          note: "Graphics encode quantitative values associated with the text.",
        },
      ],
    },
    {
      label: "How",
      title: "Visual representation",
      conclusion:
        "The corpus is dominated by icons, with smaller roles for quantitative graphs, network graphs, and typography.",
      items: [
        {
          label: "Icons",
          value: "79.5%",
          width: "79.5%",
          note: "Includes geometric shapes, color boxes, serial marks, and iconography.",
        },
        {
          label: "Quantitative Graphs",
          value: "15.8%",
          width: "15.8%",
          note: "Includes bars, lines, grids, arcs, and other data-encoding forms.",
        },
        {
          label: "Network Graphs",
          value: "1.4%",
          width: "1.4%",
          note: "Used to represent compact relational structures.",
        },
        {
          label: "Typography",
          value: "3.2%",
          width: "3.2%",
          note: "Text itself carries a visual encoding to build document linkage.",
        },
      ],
    },
  ],
};
