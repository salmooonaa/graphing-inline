import type { ResourceStatus } from "@/types/content";

const toneMap: Record<ResourceStatus, string> = {
  available: "bg-emerald-100 text-emerald-800",
  comingSoon: "bg-amber-100 text-amber-800",
  unavailable: "bg-slate-200 text-slate-700",
};

const labelMap: Record<ResourceStatus, string> = {
  available: "Available",
  comingSoon: "Coming soon",
  unavailable: "Unavailable",
};

type StatusBadgeProps = {
  status: ResourceStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneMap[status]}`}
    >
      {labelMap[status]}
    </span>
  );
}
