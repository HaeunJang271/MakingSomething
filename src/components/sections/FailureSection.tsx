import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

/**
 * Failure log section highlighting process over perfection.
 */
export function FailureSection() {
  const example = projects[0].failureLogs[0];

  return (
    <section className="border-b border-border py-16 md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              완성된 것만 보여주지 않습니다.
            </h2>
            <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-muted md:mt-8 md:text-lg">
              <p>
                잘된 결과만 기록하면 만드는 과정의 절반이 사라집니다.
              </p>
              <p>
                우리는 실패한 시도, 잘못된 선택, 사용자 피드백, 다시 만든
                과정까지 기록합니다.
              </p>
            </div>
            <p className="mt-8 font-mono text-xs tracking-[0.12em] text-accent md:mt-10 md:text-sm md:tracking-[0.18em]">
              PROCESS &gt; PERFECTION
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <article className="border border-border bg-bg-elevated p-4 sm:p-6 md:p-8">
              <p className="break-words font-mono text-[10px] tracking-[0.08em] text-muted md:tracking-[0.16em]">
                EXAMPLE — ILLUSTRATIVE UI CONTENT
              </p>
              <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-mono text-sm tracking-[0.14em]">
                  ATTEMPT {String(example.attempt).padStart(2, "0")}
                </h3>
                <span className="shrink-0 font-mono text-[11px] tracking-[0.14em] text-accent">
                  {example.status}
                </span>
              </div>
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="font-mono text-[10px] tracking-[0.14em] text-muted">
                    PROBLEM
                  </dt>
                  <dd className="mt-2 text-base">{example.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] tracking-[0.14em] text-muted">
                    LESSON
                  </dt>
                  <dd className="mt-2 text-base">{example.lesson}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] tracking-[0.14em] text-muted">
                    NEXT
                  </dt>
                  <dd className="mt-2 text-base">{example.next}</dd>
                </div>
              </dl>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
