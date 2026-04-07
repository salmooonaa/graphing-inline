export type SectionId =
  | "hero"
  | "summary"
  | "problem"
  | "method"
  | "framework"
  | "findings"
  | "implications"
  | "authors"
  | "resources"
  | "citation"
  | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type HighlightItem = {
  title: string;
  description: string;
  value?: string;
};

export type DetailItem = {
  title: string;
  description: string;
  details?: string[];
};

export type ResourceStatus = "Planned" | "In Preparation" | "Available";

export type ResourceItem = {
  name: string;
  description: string;
  status: ResourceStatus;
  href?: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type SiteMeta = {
  title: string;
  description: string;
  navItems: NavItem[];
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    status: string;
    actions: HeroAction[];
  };
  summary: {
    eyebrow: string;
    title: string;
    description: string;
    points: HighlightItem[];
  };
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    points: HighlightItem[];
  };
  method: {
    eyebrow: string;
    title: string;
    description: string;
    phases: DetailItem[];
  };
  framework: {
    eyebrow: string;
    title: string;
    description: string;
    dimensions: HighlightItem[];
  };
  findings: {
    eyebrow: string;
    title: string;
    description: string;
    items: HighlightItem[];
  };
  implications: {
    eyebrow: string;
    title: string;
    description: string;
    items: HighlightItem[];
  };
  authors: {
    eyebrow: string;
    title: string;
    description: string;
    items: DetailItem[];
  };
  resources: {
    eyebrow: string;
    title: string;
    description: string;
    items: ResourceItem[];
  };
  citation: {
    eyebrow: string;
    title: string;
    description: string;
    citationText: string;
    bibtex: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    items: ContactItem[];
  };
};
