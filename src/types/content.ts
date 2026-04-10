export type SectionId =
  | "overview"
  | "motivation"
  | "lens"
  | "paper"
  | "results"
  | "bibtex"
  | "hero"
  | "summary"
  | "problem"
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

export type PageAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type PageStat = {
  value: string;
  label: string;
};

export type HeroAuthor = {
  name: string;
  href?: string;
};

export type PlaceholderFigure = {
  eyebrow: string;
  title: string;
  description: string;
};

export type PageHeroContent = {
  badge: string;
  title: string;
  subtitle?: string;
  authorsLine: string;
  authors?: HeroAuthor[];
  publicationLine: string;
  contributionNotes?: string[];
  acknowledgementLine?: string;
  thesis: string;
  actions: PageAction[];
  stats: PageStat[];
  visual: PlaceholderFigure;
};

export type LensAxis = {
  label: string;
  title: string;
  description: string;
  accent: "blue" | "amber" | "green";
};

export type ResearchLensContent = {
  eyebrow: string;
  title: string;
  description: string;
  definition: string;
  researchQuestion: string;
  metrics: PageStat[];
  axes: LensAxis[];
  visual: PlaceholderFigure;
};

export type CoreFinding = {
  label: string;
  metric: string;
  title: string;
  description: string;
};

export type CoreFindingsContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: CoreFinding[];
  distributionVisual: PlaceholderFigure;
  relationshipVisual: PlaceholderFigure;
};

export type Implication = {
  title: string;
  description: string;
};

export type PaperSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  implications: Implication[];
  authorsLine: string;
  paperHref: string;
  doiHref: string;
  bibtex: string;
  bibtexDownloadHref: string;
  citationText: string;
  contactLabel: string;
  contactHref: string;
};

export type HomePageContent = {
  hero: PageHeroContent;
  lens: ResearchLensContent;
  findings: CoreFindingsContent;
  paper: PaperSectionContent;
};

export type HeroContent = SectionIntro & {
  authorsLine: string;
  publicationLine: string;
  status: string;
  actions: HeroAction[];
  metrics: HeroMetric[];
  visual: HeroVisual;
};

export type SummaryContent = SectionIntro & {
  points: HighlightItem[];
};

export type ProblemContent = SectionIntro & {
  researchQuestion: string;
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
  bibtexDownloadHref?: string;
};

export type ContactContent = SectionIntro & {
  items: ContactItem[];
};

export type HomeContent = {
  hero: HeroContent;
  summary: SummaryContent;
  problem: ProblemContent;
  framework: FrameworkContent;
  findings: FindingsContent;
  implications: ImplicationsContent;
  authors: AuthorsContent;
  resources: ResourcesContent;
  citation: CitationContent;
  contact: ContactContent;
};
