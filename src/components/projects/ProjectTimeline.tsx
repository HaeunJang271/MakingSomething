import { formatDay } from "@/lib/utils";
import type { TimelineEntry } from "@/types";

interface ProjectTimelineProps {
  entries: TimelineEntry[];
}

/**
 * Visual journal-style project timeline.
 */
export function ProjectTimeline({ entries }: ProjectTimelineProps) {
  return (
    <ol className="border-t border-border">
      {entries.map((entry) => (
        <li
          key={entry.day}
          className="grid gap-3 border-b border-border py-8 md:grid-cols-[140px_1fr]"
        >
          <div>
            <p className="font-mono text-sm tracking-[0.14em]">
              {formatDay(entry.day)}
            </p>
            <p className="mt-2 font-mono text-[10px] tracking-[0.12em] text-muted">
              {entry.status === "planned" ? "PLANNED" : "DONE"}
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {entry.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              {entry.description}
            </p>
            {entry.link ? (
              <a
                href={entry.link}
                className="mt-3 inline-block font-mono text-[11px] tracking-[0.12em] text-accent underline-offset-4 hover:underline"
              >
                OPEN LINK →
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
