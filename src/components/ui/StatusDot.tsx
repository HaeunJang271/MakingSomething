import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types";

interface StatusDotProps {
  status: ProjectStatus;
  className?: string;
}

const statusColor: Record<ProjectStatus, string> = {
  BUILDING: "bg-accent",
  RECRUITING: "bg-fg",
  RELEASED: "bg-success",
  PAUSED: "bg-muted",
};

/**
 * Status indicator with a colored dot and monospace label.
 */
export function StatusDot({ status, className }: StatusDotProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]",
        className,
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", statusColor[status])}
        aria-hidden
      />
      {status}
    </span>
  );
}
