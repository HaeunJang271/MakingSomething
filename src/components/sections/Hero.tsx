import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Full-viewport editorial hero for the homepage.
 */
export function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-3.5rem)] flex-col justify-center border-b border-border md:min-h-[calc(100vh-4rem)]">
      <Container className="flex flex-1 flex-col justify-center py-12 pb-8 md:py-24">
        <Eyebrow className="mb-6 md:mb-8">MAKER COLLECTIVE / 001</Eyebrow>

        <div className="display-lockup">
          <h1 className="display-lockup__title font-display font-extrabold">
            <span>MAKE</span>
            <span>SOMETHING.</span>
          </h1>
        </div>

        <p className="mt-8 max-w-xl text-lg leading-relaxed md:mt-10 md:text-2xl md:leading-snug">
          아이디어를 말하는 사람에서,
          <br />
          직접 만드는 사람으로.
        </p>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:mt-6 md:text-lg">
          MAKE SOMETHING은 무언가를 만들고 싶은 사람들이 모여 실제 프로젝트를
          만들고 공개하는 커뮤니티입니다.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <ButtonLink href="/join" variant="accent">
            JOIN THE COLLECTIVE
          </ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            EXPLORE PROJECTS
          </ButtonLink>
        </div>

        <a
          href="#manifesto"
          className="mt-12 inline-flex min-h-11 items-center font-mono text-[11px] tracking-[0.14em] text-muted transition-colors hover:text-fg md:mt-16"
        >
          SCROLL TO EXPLORE ↓
        </a>
      </Container>
    </section>
  );
}
