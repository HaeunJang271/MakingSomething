import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Near full-screen closing CTA for the homepage.
 */
export function FinalCta() {
  return (
    <section className="flex min-h-[60svh] items-center border-b border-border py-16 md:min-h-[80vh] md:py-24">
      <Container>
        <Reveal>
          <div className="display-lockup">
            <h2 className="display-lockup__title font-display font-extrabold">
              <span>MAKE</span>
              <span>SOMETHING.</span>
            </h2>
          </div>
          <p className="mt-8 text-lg text-muted md:text-xl">
            아이디어를 남겨두지 마세요.
          </p>
          <div className="mt-10">
            <ButtonLink href="/join" variant="accent" className="text-base">
              START MAKING →
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
