import type { ResourcesContent } from "@/types/content";

export const resourcesContent: ResourcesContent = {
  eyebrow: "Resources",
  title: "Public materials associated with the paper",
  description:
    "This section lists only public materials directly connected to the paper, with explicit status when a resource is not currently open.",
  items: [
    {
      name: "Paper",
      description:
        "Author version on arXiv for Graphing Inline: Understanding Word-scale Graphics Use in Scientific Papers.",
      status: "available",
      href: "https://arxiv.org/abs/2603.10533",
    },
    {
      name: "Poster",
      description:
        "No public poster file is linked in the current paper record.",
      status: "unavailable",
    },
    {
      name: "BibTeX",
      description:
        "Download the BibTeX entry for the published CHI EA 2026 paper.",
      status: "available",
      href: "/files/graphing-inline.bib",
    },
    {
      name: "Supplementary",
      description:
        "No public supplementary material is linked in the current paper record.",
      status: "unavailable",
    },
    {
      name: "Code",
      description:
        "No public research code repository is linked in the current paper record.",
      status: "unavailable",
    },
  ],
};
