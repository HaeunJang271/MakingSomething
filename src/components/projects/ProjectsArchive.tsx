"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { filterProjects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types";

const filters: Array<"ALL" | ProjectStatus> = [
  "ALL",
  "BUILDING",
  "RECRUITING",
  "RELEASED",
  "PAUSED",
];

/**
 * Client-side filter controls and project archive list.
 */
export function ProjectsArchive() {
  const [active, setActive] = useState<"ALL" | ProjectStatus>("ALL");
  const list = useMemo(() => filterProjects(active), [active]);

  return (
    <div>
      <section className="border-b border-border py-20 md:py-28">
        <Container>
          <Eyebrow>PROJECT ARCHIVE</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-7xl">
            PROJECTS
          </h1>
          <p className="mt-6 max-w-md text-base text-muted md:text-lg">
            우리가 만들고, 실패하고, 공개한 것들.
          </p>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container>
          <div
            className="-mx-4 flex gap-2 overflow-x-auto border-b border-border px-4 pb-6 scrollbar-none md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
            role="tablist"
            aria-label="Project status filters"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active === filter}
                className={cn(
                  "shrink-0 touch-manipulation border px-4 py-3 font-mono text-[11px] tracking-[0.12em] transition-colors",
                  active === filter
                    ? "border-fg bg-fg text-bg"
                    : "border-border text-muted hover:border-fg hover:text-fg",
                )}
                onClick={() => setActive(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {list.length > 0 ? (
              list.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p className="border border-dashed border-border px-6 py-16 text-center text-muted">
                이 상태의 프로젝트는 아직 없습니다.
              </p>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
