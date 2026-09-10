import type { Maker } from "@/types";
import { projects } from "@/data/projects";

interface MakerCardProps {
  maker: Maker;
}

/**
 * Placeholder-aware maker profile card.
 */
export function MakerCard({ maker }: MakerCardProps) {
  const projectTitles = maker.projects
    .map((id) => projects.find((project) => project.id === id)?.title)
    .filter(Boolean);

  return (
    <article className="h-full border border-border p-6 transition-colors hover:border-fg">
      {maker.isPlaceholder ? (
        <p className="font-mono text-[10px] tracking-[0.14em] text-muted">
          PLACEHOLDER
        </p>
      ) : null}
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
        {maker.name}
      </h3>
      <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-accent">
        {maker.role}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{maker.bio}</p>
      <p className="mt-5 font-mono text-[10px] tracking-[0.12em] text-muted">
        INTERESTS
      </p>
      <p className="mt-1 text-sm">{maker.interests.join(" · ")}</p>
      <p className="mt-5 font-mono text-[10px] tracking-[0.12em] text-muted">
        CURRENT PROJECT
      </p>
      <p className="mt-1 text-sm">
        {projectTitles.length > 0 ? projectTitles.join(", ") : "—"}
      </p>
    </article>
  );
}
