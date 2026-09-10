import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { id: "01", title: "IDEA", body: "만들고 싶은 것을 찾습니다." },
  { id: "02", title: "FORM", body: "혼자 또는 팀을 만듭니다." },
  { id: "03", title: "MAKE", body: "실제로 만듭니다." },
  { id: "04", title: "ITERATE", body: "실패하고 수정합니다." },
  { id: "05", title: "RELEASE", body: "세상에 공개합니다." },
] as const;

/**
 * Five-step process shown horizontally on desktop, stacked on mobile.
 */
export function HowItWorks() {
  return (
    <section className="border-b border-border py-16 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
            아이디어는 프로젝트가 됩니다.
          </h2>
        </Reveal>

        <ol className="mt-10 grid gap-0 md:mt-14 md:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.id} delayMs={index * 70}>
              <li className="border-t border-border py-6 md:border-t-0 md:border-l md:px-5 md:py-0 first:md:border-l-0 first:md:pl-0">
                <p className="font-mono text-[11px] tracking-[0.16em] text-accent">
                  {step.id}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight md:mt-4 md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted md:mt-3">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
