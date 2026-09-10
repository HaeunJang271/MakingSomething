import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MakerCard } from "@/components/makers/MakerCard";
import { makers } from "@/data/makers";

/**
 * Homepage makers preview using clearly labeled placeholder profiles.
 */
export function MakersPreview() {
  return (
    <section className="border-b border-border py-16 md:py-32">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            누가 만드는가?
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted">
            우리는 회원을 모으기보다 Maker를 모읍니다.
          </p>
          <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-muted">
            DEMO PROFILES — NOT REAL MEMBERS
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {makers.slice(0, 3).map((maker, index) => (
            <Reveal key={maker.id} delayMs={index * 70}>
              <MakerCard maker={maker} />
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={140}>
          <div className="mt-10">
            <ButtonLink href="/makers" variant="secondary">
              MEET THE MAKERS
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
