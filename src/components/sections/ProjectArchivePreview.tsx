import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

/**
 * Homepage preview of the project archive.
 */
export function ProjectArchivePreview() {
  return (
    <section className="border-b border-border py-16 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
            무언가를 만들었다면,
            <br />
            여기에 남습니다.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4">
          {projects.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <div className="mt-10">
            <ButtonLink href="/projects" variant="secondary">
              VIEW ALL PROJECTS
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
