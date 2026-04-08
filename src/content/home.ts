import type { HomePageContent } from "@/types/content";

export const homeContent: HomePageContent = {
  hero: {
    badge: "CHI EA 2026 · Barcelona, Spain",
    title:
      "Graphing Inline: Understanding Word-scale Graphics Use in Scientific Papers",
    authorsLine:
      "Siyu Lu, Yanhan Liu, Shiyu Xu, Ruishi Zou, and Chen Ye",
    publicationLine:
      "A corpus study of word-scale graphics in scientific papers",
    thesis:
      "Word-scale graphics are still rare in scientific writing, but when they do appear they follow a clear logic across placement, function, and representation.",
    actions: [
      {
        label: "Read Paper",
        href: "https://arxiv.org/abs/2603.10533",
        variant: "primary",
      },
      {
        label: "BibTeX",
        href: "#paper",
        variant: "secondary",
      },
    ],
    stats: [
      { value: "126,797", label: "papers screened" },
      { value: "909", label: "use cases reviewed" },
      { value: "0.6%", label: "papers using word-scale graphics" },
    ],
    visual: {
      eyebrow: "Primary visual",
      title: "Hero image placeholder",
      description:
        "Place a wide editorial image here: ideally a refined comparison between conventional split figure reading and real word-scale graphics examples, or a carefully cropped Figure 1 if a custom comparison visual is not available.",
    },
  },
  lens: {
    eyebrow: "Research Lens",
    title: "A compact way to read the paper",
    description:
      "The homepage only keeps the minimum needed to orient the reader: what word-scale graphics are, what the paper asks, and which lens organizes the evidence.",
    definition:
      "Word-scale graphics are typographic-scale visuals embedded directly in running text or tables.",
    researchQuestion:
      "How do researchers apply word-scale graphics in scientific papers?",
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
      eyebrow: "Framework image",
      title: "Annotated framework placeholder",
      description:
        "Place an annotated crop of Figure 1 here, showing representative examples for where, why, and how. The image should carry most of the explanatory burden, with labels pointing to the three dimensions.",
    },
  },
  findings: {
    eyebrow: "Core Findings",
    title: "Three findings worth remembering",
    description:
      "The page foregrounds only the conclusions that matter most for fast understanding and academic recall.",
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
      eyebrow: "Figure placeholder",
      title: "Distribution summary placeholder",
      description:
        "Place a clean results graphic here showing overall rarity and representation prevalence, with icons clearly standing out against the smaller chart, typography, and network categories.",
    },
    relationshipVisual: {
      eyebrow: "Figure placeholder",
      title: "Relationship summary placeholder",
      description:
        "Place a concise relationship visual here showing how where, why, and how co-occur. This should emphasize the stronger table-to-annotation-to-quantitative-graph pattern without reproducing the full statistical appendix.",
    },
  },
  paper: {
    eyebrow: "Why It Matters",
    title: "A corpus result with design consequences",
    description:
      "The paper closes with practical implications for scholarly authoring, reading, and publication workflows. The website keeps those implications brief and directs detailed reading back to the paper itself.",
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
    contactLabel: "Corresponding author: Chen Ye",
    contactHref: "mailto:yechen@tongji.edu.cn",
  },
};
