import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusDot } from "@/components/ui/StatusDot";
import { ProjectTimeline } from "@/components/projects/ProjectTimeline";
import { getProjectById, projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";
import { formatDay, formatProjectNumber } from "@/lib/utils";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

/**
 * Generates static params for known project ids.
 */
export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

/**
 * Builds metadata for a project detail page.
 */
export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) {
    return createMetadata({ title: "Project" });
  }
  return createMetadata({
    title: `${formatProjectNumber(project.number)} ${project.title}`,
    description: project.description,
    path: `/projects/${project.id}`,
  });
}

/**
 * Project detail page with process journal layout.
 */
export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <div>
      <section className="border-b border-border py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-center gap-4">
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
              {formatProjectNumber(project.number)}
            </p>
            <StatusDot status={project.status} />
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:mt-6 md:text-lg">
            {project.description}
          </p>

          <dl className="mt-8 grid gap-5 border border-border p-4 sm:grid-cols-2 sm:p-6 lg:mt-10 lg:grid-cols-4">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.14em] text-muted">
                TEAM
              </dt>
              <dd className="mt-2 text-sm">{project.team}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.14em] text-muted">
                DURATION
              </dt>
              <dd className="mt-2 text-sm">
                {project.type} / {project.duration}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.14em] text-muted">
                DAY
              </dt>
              <dd className="mt-2 text-sm">
                {formatDay(project.currentDay)} / {project.totalDays}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.14em] text-muted">
                CREATORS
              </dt>
              <dd className="mt-2 text-sm">{project.creators.join(", ")}</dd>
            </div>
          </dl>

          <ProgressBar className="mt-8" value={project.progress} label="PROGRESS" />
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              WHY
            </h2>
            <p className="mt-4 text-muted">{project.why}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              PROCESS
            </h2>
            <p className="mt-4 text-muted">{project.process}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            FAILURE LOG
          </h2>
          <div className="mt-8 grid gap-4">
            {project.failureLogs.map((log) => (
              <article key={log.attempt} className="border border-border p-6">
                {log.isExample ? (
                  <p className="font-mono text-[10px] tracking-[0.14em] text-muted">
                    EXAMPLE
                  </p>
                ) : null}
                <div className="mt-2 flex justify-between gap-4">
                  <h3 className="font-mono text-sm tracking-[0.14em]">
                    ATTEMPT {String(log.attempt).padStart(2, "0")}
                  </h3>
                  <span className="font-mono text-[11px] text-accent">
                    {log.status}
                  </span>
                </div>
                <p className="mt-4 text-sm">
                  <span className="text-muted">Problem: </span>
                  {log.problem}
                </p>
                <p className="mt-2 text-sm">
                  <span className="text-muted">Lesson: </span>
                  {log.lesson}
                </p>
                <p className="mt-2 text-sm">
                  <span className="text-muted">Next: </span>
                  {log.next}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {project.iterations && project.iterations.length > 0 ? (
        <section className="border-b border-border py-16 md:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              ITERATIONS
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              {project.iterations.map((item) => (
                <li key={item} className="border-l border-accent pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="border-b border-border py-16 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            RESULT
          </h2>
          <p className="mt-4 text-muted">
            {project.result ?? "아직 공개된 결과가 없습니다. 진행 중입니다."}
          </p>
          {project.links && project.links.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[11px] tracking-[0.14em] text-accent underline-offset-4 hover:underline"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            PROJECT TIMELINE
          </h2>
          <div className="mt-8">
            <ProjectTimeline entries={project.timeline} />
          </div>
          <div className="mt-10">
            <ButtonLink href="/join" variant="secondary">
              JOIN THIS ENERGY →
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
