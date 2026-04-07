import type { AuthorsContent } from "@/types/content";

export const authorsContent: AuthorsContent = {
  eyebrow: "Authors",
  title: "Author information for the paper project",
  description:
    "This section is reserved for the paper's public author and affiliation metadata.",
  items: [
    {
      title: "Author list",
      description:
        "Author names and affiliations will be populated from the official paper record.",
    },
    {
      title: "Corresponding contact",
      description:
        "The public contact owner will be listed here once the project metadata is finalized.",
    },
  ],
};
