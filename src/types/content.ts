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

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type HeroMetric = {
  label: string;
  value: string;
};

export type HeroVisualItem = {
  label: string;
  value: string;
};

export type HeroVisualDimension = {
  label: string;
  subtitle: string;
  items: HeroVisualItem[];
};

export type HeroVisual = {
  title: string;
  caption: string;
  dimensions: HeroVisualDimension[];
};

export type HighlightItem = {
  title: string;
  description: string;
  value?: string;
};

export type QuantifiedItem = {
  label: string;
  value: string;
  width: string;
  note?: string;
};

export type ProblemPoint = {
  label: string;
  title: string;
  description: string;
  evidence: string;
};

export type FrameworkDimension = {
  label: string;
  title: string;
  conclusion: string;
  items: QuantifiedItem[];
};

export type FindingStatement = {
  label: string;
  conclusion: string;
  explanation: string;
  evidence?: string;
};

export type FindingsFigure = {
  title: string;
  caption: string;
  items: QuantifiedItem[];
};

export type AssociationPair = {
  label: string;
  statistic: string;
  width: string;
  explanation: string;
};

export type ImplicationItem = {
  title: string;
  conclusion: string;
  explanation: string;
  support: string;
};

export type ImplicationsFigureStep = {
  label: string;
  title: string;
  summary: string;
};

export type ImplicationsFigure = {
  title: string;
  caption: string;
  steps: ImplicationsFigureStep[];
};

export type DetailItem = {
  title: string;
  description: string;
  details?: string[];
};

export type MethodStage = {
  title: string;
  input: string[];
  process: string[];
  output: string[];
};

export type ResourceStatus = "available" | "comingSoon" | "unavailable";

type BaseResourceItem = {
  name: string;
  description: string;
};

export type AvailableResourceItem = BaseResourceItem & {
  status: "available";
  href: string;
};

export type PendingResourceItem = BaseResourceItem & {
  status: "comingSoon" | "unavailable";
  href?: never;
};

export type ResourceItem = AvailableResourceItem | PendingResourceItem;

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

export type HeroContent = SectionIntro & {
  status: string;
  actions: HeroAction[];
  metrics: HeroMetric[];
  visual: HeroVisual;
};

export type SummaryContent = SectionIntro & {
  points: HighlightItem[];
};

export type ProblemContent = SectionIntro & {
  points: ProblemPoint[];
};

export type MethodContent = SectionIntro & {
  phases: MethodStage[];
  note?: string;
};

export type FrameworkContent = SectionIntro & {
  conclusion: string;
  figureCaption: string;
  dimensions: FrameworkDimension[];
};

export type FindingsContent = SectionIntro & {
  conclusion: string;
  items: FindingStatement[];
  representationFigure: FindingsFigure;
  associationFigure: {
    title: string;
    caption: string;
    pairs: AssociationPair[];
  };
};

export type ImplicationsContent = SectionIntro & {
  conclusion: string;
  items: ImplicationItem[];
  figure: ImplicationsFigure;
};

export type AuthorsContent = SectionIntro & {
  items: DetailItem[];
};

export type ResourcesContent = SectionIntro & {
  items: ResourceItem[];
};

export type CitationContent = SectionIntro & {
  citationText: string;
  bibtex: string;
};

export type ContactContent = SectionIntro & {
  items: ContactItem[];
};

export type HomeContent = {
  hero: HeroContent;
  summary: SummaryContent;
  problem: ProblemContent;
  method: MethodContent;
  framework: FrameworkContent;
  findings: FindingsContent;
  implications: ImplicationsContent;
  authors: AuthorsContent;
  resources: ResourcesContent;
  citation: CitationContent;
  contact: ContactContent;
};
