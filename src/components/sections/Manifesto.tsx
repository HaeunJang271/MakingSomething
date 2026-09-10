import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const cycle = ["MAKE", "FAIL", "LEARN", "RELEASE"] as const;

/**
 * Editorial manifesto with process words as visual units.
 */
export function Manifesto() {
  return (
    <section id="manifesto" className="border-b border-border py-16 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
            우리는 아이디어를
            <br />
            말하는 것에서
            <br />
            끝내지 않습니다.
          </h2>
        </Reveal>

        <Reveal delayMs={120}>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-muted md:text-xl">
            만들고,
            <br />
            실패하고,
            <br />
            배우고,
            <br />
            다시 만들고,
            <br />
            결국 공개합니다.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cycle.map((word, index) => (
            <Reveal key={word} delayMs={index * 80}>
              <div className="border border-border px-5 py-8">
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted">
                  0{index + 1}
                </p>
                <p className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {word}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
