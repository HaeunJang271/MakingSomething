import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Mid-page join invitation with strong typography.
 */
export function JoinSection() {
  return (
    <section className="border-b border-border py-16 md:py-32">
      <Container>
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,9vw,5.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            YOU DON&apos;T NEED
            <br />
            TO BE GOOD.
          </h2>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-10 max-w-lg space-y-3 text-base leading-relaxed text-muted md:text-lg">
            <p>개발을 잘하지 않아도 됩니다.</p>
            <p>디자인을 전공하지 않아도 됩니다.</p>
            <p>프로젝트 경험이 없어도 됩니다.</p>
            <p className="pt-2 text-fg">
              무언가를 만들어보고 싶다면 시작할 수 있습니다.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={160}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/join" variant="accent">
              JOIN MAKE SOMETHING
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
