import type { HomePageContent } from "@/types/content";

export const homeContent: HomePageContent = {
  hero: {
    badge: "Title",
    title: "Graphing Inline",
    subtitle: "Understanding Word-scale Graphics Use in Scientific Papers",
    authorsLine:
      "Siyu Lu*, Yanhan Liu*, Shiyu Xu, Ruishi Zou, Chen Ye",
    publicationLine:
      "CHI EA 2026 · DOI 10.1145/3772363.3798356",
    contributionNotes: ["* Equal contribution"],
    thesis:
      "A corpus study of how word-scale graphics appear in scientific papers.",
    actions: [
      {
        label: "Paper",
        href: "https://doi.org/10.1145/3772363.3798356",
        variant: "secondary",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2603.10533",
        variant: "secondary",
      },
      {
        label: "Material",
        href: "/files/graphing-inline.bib",
        variant: "secondary",
      },
    ],
    stats: [
      { value: "126,797", label: "papers screened" },
      { value: "909", label: "use cases coded" },
      { value: "0.6%", label: "adoption rate" },
    ],
    visual: {
      eyebrow: "Title figure",
      title: "Figure placeholder",
      description: "",
    },
  },
  lens: {
    eyebrow: "Research Lens",
    title: "Research object, framework, and evidence in one compact view",
    description:
      "This section does only three things: define the object, state the question, and give the where-why-how lens that organizes the corpus evidence.",
    definition:
      "Word-scale graphics are typographic-scale visuals embedded directly in running text or tables.",
    researchQuestion:
      "How are word-scale graphics positioned, what do they do, and how are they visually represented in scientific papers?",
    metrics: [
      { value: "126,797", label: "papers in the screened corpus" },
      { value: "909", label: "distinct use cases analyzed" },
      { value: "κ = 0.91", label: "validation reliability" },
    ],
    axes: [
      {
        label: "Where",
        title: "Positioning",
        description: "Whether the graphic appears in text or in tables.",
        accent: "blue",
      },
      {
        label: "Why",
        title: "Function",
        description:
          "Whether it indexes, symbolizes, or annotates nearby content.",
        accent: "amber",
      },
      {
        label: "How",
        title: "Representation",
        description:
          "Whether it takes the form of icons, charts, networks, or typography.",
        accent: "green",
      },
    ],
    visual: {
      eyebrow: "Annotated overview",
      title: "Replace with an annotated object-plus-framework figure",
      description:
        "Use one image group that explains the object and the framework together: representative inline examples, a concise where-why-how annotation layer, and enough visual evidence to reduce explanatory text.",
    },
  },
  findings: {
    eyebrow: "Core Findings",
    title: "Three findings worth remembering",
    description:
      "The homepage keeps only the strongest conclusions: rarity, icon dominance, and structured relationships between where, why, and how.",
    items: [
      {
        label: "01",
        metric: "0.6%",
        title: "Adoption is still rare.",
        description:
          "Only a small fraction of the screened corpus uses word-scale graphics at all.",
      },
      {
        label: "02",
        metric: "79.5%",
        title: "Icons dominate the design space.",
        description:
          "Most observed examples rely on icon-like encodings rather than miniature quantitative charts.",
      },
      {
        label: "03",
        metric: "Structured",
        title: "Placement, function, and representation move together.",
        description:
          "Text favors visual indexing, while tables more often host data annotation and quantitative graphics.",
      },
    ],
    distributionVisual: {
      eyebrow: "Result figure A",
      title: "Replace with the overall distribution figure",
      description:
        "Show the big picture only: overall rarity plus representation prevalence, with icons clearly standing apart from the smaller chart, typography, and network categories.",
    },
    relationshipVisual: {
      eyebrow: "Result figure B",
      title: "Replace with the relationship or pattern figure",
      description:
        "Show the main co-occurrence pattern without rebuilding the full appendix. Emphasize how tables, data annotation, and quantitative graphics align more strongly than the rest.",
    },
  },
  paper: {
    eyebrow: "Why It Matters",
    title: "A corpus result with practical consequences for scholarly communication",
    description:
      "The discussion is reduced to three short implications, followed by a compact utility footer for paper access, citation, and contact.",
    implications: [
      {
        title: "Authoring",
        description:
          "Inline graphics will not spread without better tools for creating and maintaining text-linked visual elements.",
      },
      {
        title: "Reading",
        description:
          "Scientific papers should support richer inspection and navigation instead of treating inline graphics as static decoration.",
      },
      {
        title: "Publishing",
        description:
          "Publication workflows need to better preserve expressive inline graphics across PDF and HTML outputs.",
      },
    ],
    authorsLine:
      "Siyu Lu, Yanhan Liu, Shiyu Xu, Ruishi Zou, and Chen Ye",
    paperHref: "https://arxiv.org/abs/2603.10533",
    doiHref: "https://doi.org/10.1145/3772363.3798356",
    bibtexDownloadHref: "/files/graphing-inline.bib",
    citationText:
      "Siyu Lu, Yanhan Liu, Shiyu Xu, Ruishi Zou, and Chen Ye. 2026. Graphing Inline: Understanding Word-scale Graphics Use in Scientific Papers. In Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26).",
    bibtex: `@inproceedings{lu2026graphinginline,
  author = {Lu, Siyu and Liu, Yanhan and Xu, Shiyu and Zou, Ruishi and Ye, Chen},
  title = {Graphing Inline: Understanding Word-scale Graphics Use in Scientific Papers},
  year = {2026},
  booktitle = {Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems},
  series = {CHI EA '26'},
  doi = {10.1145/3772363.3798356},
  url = {https://doi.org/10.1145/3772363.3798356}
}`,
    contactLabel: "Contact: Chen Ye",
    contactHref: "mailto:yechen@tongji.edu.cn",
  },
};
