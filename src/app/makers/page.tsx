import type { Metadata } from "next";
import { MakerCard } from "@/components/makers/MakerCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { makers } from "@/data/makers";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Makers",
  path: "/makers",
  description: "프로젝트를 만드는 사람들.",
});

/**
 * Makers directory with placeholder profiles until real members join.
 */
export default function MakersPage() {
  return (
    <div>
      <section className="border-b border-border py-20 md:py-28">
        <Container>
          <Eyebrow>THE MAKERS</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-7xl">
            MAKERS
          </h1>
          <p className="mt-6 max-w-md text-base text-muted md:text-lg">
            프로젝트를 만드는 사람들.
          </p>
          <p className="mt-4 max-w-md break-words font-mono text-[11px] tracking-[0.08em] text-muted md:tracking-[0.14em]">
            ALL PROFILES BELOW ARE PLACEHOLDERS / DEMO DATA
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {makers.map((maker) => (
              <MakerCard key={maker.id} maker={maker} />
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/join" variant="accent">
              BECOME A MAKER →
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
