import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JoinForm } from "@/components/join/JoinForm";

/**
 * Join page shell with application form.
 */
export function JoinPageContent() {
  return (
    <div>
      <section className="border-b border-border py-20 md:py-28">
        <Container>
          <Eyebrow>JOIN</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-6xl">
            무엇을 만들고 싶나요?
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            지원서는 심사가 아닙니다. 무엇을 만들고 싶은지 알려주세요.
          </p>
        </Container>
      </section>
      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <JoinForm />
        </Container>
      </section>
    </div>
  );
}
