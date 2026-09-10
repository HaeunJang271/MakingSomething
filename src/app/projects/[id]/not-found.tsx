import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

/**
 * Fallback UI when a project id does not exist.
 */
export default function ProjectNotFound() {
  return (
    <Container className="py-24 text-center md:py-32">
      <p className="font-mono text-[11px] tracking-[0.16em] text-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
        Project not found.
      </h1>
      <div className="mt-8 flex justify-center">
        <ButtonLink href="/projects" variant="secondary">
          BACK TO PROJECTS
        </ButtonLink>
      </div>
    </Container>
  );
}
