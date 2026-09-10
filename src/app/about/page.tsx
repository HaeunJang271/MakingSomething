import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  path: "/about",
});

const rules = [
  "MAKE SOMETHING.",
  "START SMALL.",
  "FAILURE IS DATA.",
  "BUILD TOGETHER.",
  "RELEASE IT.",
] as const;

/**
 * About page explaining purpose, philosophy, and rules.
 */
export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>01 — WHO WE ARE</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-7xl">
              만드는 사람들의
              <br />
              집단.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:mt-8 md:text-lg">
              MAKE SOMETHING은 코딩 동아리도, 스터디 그룹도, 네트워킹 커뮤니티도
              아닙니다. 무언가를 실제로 만들고 공개하는 프로젝트 기반
              콜렉티브입니다.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>02 — WHY WE EXIST</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              아이디어만 남기지 않기 위해.
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              많은 사람이 만들고 싶다고 말합니다. 하지만 말만 하고 끝납니다. 우리는
              시간 제한이 있는 프로젝트 안에서 만들고, 실패하고, 배우고, 공개하는
              과정을 함께합니다.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>03 — OUR PHILOSOPHY</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight md:text-5xl">
              MAKE → FAIL →
              <br className="md:hidden" /> LEARN → RELEASE
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              실패는 숨기지 않습니다. 과정은 기록됩니다. 완성도보다 공개 가능한
              결과물을 만듭니다.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>04 — HOW PROJECTS WORK</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              아이디어는 프로젝트가 됩니다.
            </h2>
            <ol className="mt-10 max-w-xl space-y-4 text-base text-muted md:text-lg">
              <li>01 — 만들고 싶은 것을 찾습니다.</li>
              <li>02 — 혼자 또는 팀을 만듭니다.</li>
              <li>03 — 실제로 만듭니다.</li>
              <li>04 — 실패하고 수정합니다.</li>
              <li>05 — 세상에 공개합니다.</li>
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>05 — THE RULES</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Five rules.
            </h2>
          </Reveal>
          <ol className="mt-12 space-y-0 border-t border-border">
            {rules.map((rule, index) => (
              <Reveal key={rule} delayMs={index * 60}>
                <li className="flex items-baseline gap-6 border-b border-border py-6">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {rule}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delayMs={200}>
            <div className="mt-12">
              <ButtonLink href="/join" variant="accent">
                JOIN THE COLLECTIVE
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
