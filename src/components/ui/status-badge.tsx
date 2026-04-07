import type { ResourceStatus } from "@/types/content";

const toneMap: Record<ResourceStatus, string> = {
  Planned: "bg-slate-200 text-slate-700",
  "In Preparation": "bg-amber-100 text-amber-800",
  Available: "bg-emerald-100 text-emerald-800",
};

type StatusBadgeProps = {
  status: ResourceStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneMap[status]}`}
    >
      {status}
    </span>
  );
}
