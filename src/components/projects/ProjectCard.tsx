import Link from "next/link";
import { StatusDot } from "@/components/ui/StatusDot";
import type { Project } from "@/types";
import { cn, formatProjectNumber } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/**
 * Editorial project card used on archive and homepage previews.
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        "group block border border-border bg-bg p-4 transition-transform duration-300 hover:-translate-y-0.5 hover:border-fg sm:p-6 md:p-8",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] tracking-[0.12em] text-muted transition-colors group-hover:text-accent md:tracking-[0.16em]">
          {formatProjectNumber(project.number)}
        </p>
        <StatusDot status={project.status} />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight underline-offset-4 group-hover:underline sm:text-2xl md:text-3xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 break-words font-mono text-[11px] tracking-[0.08em] text-muted md:gap-x-6 md:tracking-[0.12em]">
        <span>{project.type}</span>
        <span>{project.duration}</span>
        <span className="min-w-0">{project.creators.join(" / ")}</span>
      </div>
      <div className="mt-6 h-px w-full bg-border">
        <div
          className="h-full bg-accent"
          style={{ width: `${project.progress}%` }}
        />
      </div>
    </Link>
  );
}
