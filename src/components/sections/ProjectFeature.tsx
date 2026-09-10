import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Reveal } from "@/components/ui/Reveal";
import { StatusDot } from "@/components/ui/StatusDot";
import { projects } from "@/data/projects";
import { formatDay, formatProjectNumber } from "@/lib/utils";

/**
 * Featured treatment for Project #001 on the homepage.
 */
export function ProjectFeature() {
  const project = projects[0];

  return (
    <section className="border-b border-border bg-bg-elevated py-16 md:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <p className="font-mono text-[11px] tracking-[0.12em] text-accent md:tracking-[0.18em]">
              {formatProjectNumber(project.number)}
            </p>
            <StatusDot status={project.status} />
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-6xl">
            {project.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:mt-6 md:text-lg">
            {project.description}
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-8 grid gap-6 border border-border bg-bg p-4 sm:p-6 md:mt-10 md:grid-cols-[1fr_1fr] md:gap-8 md:p-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted">
                {formatDay(project.currentDay)} / {project.totalDays}
              </p>
              <ProgressBar
                className="mt-4"
                value={project.progress}
                label="PROGRESS"
              />
              <p className="mt-8 font-mono text-[11px] tracking-[0.14em] text-muted">
                TEAM
              </p>
              <p className="mt-2 font-display text-xl font-semibold">
                {project.team}
              </p>
            </div>

            <ol className="space-y-0 border-t border-border md:border-l md:border-t-0 md:pl-8">
              {project.timeline.map((entry) => (
                <li
                  key={entry.day}
                  className="border-b border-border py-4 last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-mono text-[11px] tracking-[0.14em]">
                      {formatDay(entry.day)}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.12em] text-muted">
                      {entry.status === "planned" ? "PLANNED" : "DONE"}
                    </p>
                  </div>
                  <p className="mt-2 text-sm">{entry.title}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delayMs={160}>
          <div className="mt-8">
            <ButtonLink href={`/projects/${project.id}`} variant="primary">
              VIEW PROJECT #001
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
