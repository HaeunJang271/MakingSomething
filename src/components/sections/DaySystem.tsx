import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const modes = [
  { name: "MINI", range: "07–30 DAYS" },
  { name: "STANDARD", range: "30–100 DAYS" },
  { name: "LONG", range: "100+ DAYS" },
] as const;

/**
 * Explains the time-boxed project system without treating 100 days as a trophy.
 */
export function DaySystem() {
  return (
    <section className="border-b border-border py-16 md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-12">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
              100일은 목표가 아닙니다.
              <br />
              마감점입니다.
            </h2>
            <div className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-muted md:mt-8 md:text-lg">
              <p>
                프로젝트를 무한정 미루지 않기 위해 우리는 시간을 정합니다.
              </p>
              <p>기본 프로젝트는 100일입니다.</p>
              <p>하지만 모든 것이 100일일 필요는 없습니다.</p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="border border-border">
              {modes.map((mode, index) => (
                <div
                  key={mode.name}
                  className={`flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3 sm:px-5 sm:py-5 ${
                    index < modes.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-display text-xl font-bold tracking-tight md:text-2xl">
                    {mode.name}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.1em] text-muted sm:tracking-[0.14em]">
                    {mode.range}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
