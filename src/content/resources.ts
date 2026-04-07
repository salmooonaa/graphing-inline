import type { ResourcesContent } from "@/types/content";

export const resourcesContent: ResourcesContent = {
  eyebrow: "Resources",
  title: "Public resources for the paper project",
  description:
    "Only public materials directly associated with the paper should appear here, with explicit status when a resource is not yet open.",
  items: [
    {
      name: "Paper PDF",
      description:
        "The public PDF link will appear here when the paper file is ready for release.",
      status: "comingSoon",
    },
    {
      name: "Poster",
      description:
        "The project poster will appear here when the public poster file is ready.",
      status: "comingSoon",
    },
  ],
};
