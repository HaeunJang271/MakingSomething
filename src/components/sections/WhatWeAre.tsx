"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const disciplines = [
  "DEVELOPMENT",
  "DESIGN",
  "ART",
  "WRITING",
  "MUSIC",
  "VIDEO",
  "GAME",
  "AI",
  "RESEARCH",
  "HARDWARE",
  "3D",
  "ETC.",
] as const;

/**
 * Explains who belongs and lists interactive discipline labels.
 */
export function WhatWeAre() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="border-b border-border py-16 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>WHAT WE ARE</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            만드는 사람들의 집단.
          </h2>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-muted md:mt-10 md:text-lg">
            <p>개발자일 필요는 없습니다. 디자이너일 필요도 없습니다.</p>
            <p>
              그림을 그릴 수도 있고, 글을 쓸 수도 있고, 게임을 만들 수도 있고,
              음악을 만들 수도 있습니다.
            </p>
            <p>아직 잘하는 게 없어도 괜찮습니다.</p>
            <p className="text-fg">중요한 것은 직접 만들어보고 싶은지입니다.</p>
          </div>
        </Reveal>

        <Reveal delayMs={160}>
          <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-2 md:mt-16 md:gap-x-8 md:gap-y-4">
            {disciplines.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className={cn(
                    "min-h-11 touch-manipulation px-1 font-display text-xl tracking-tight transition-all duration-200 md:text-3xl",
                    active === item
                      ? "text-accent underline decoration-1 underline-offset-8"
                      : "text-fg/45 hover:text-fg hover:underline hover:decoration-1 hover:underline-offset-8",
                  )}
                  onClick={() =>
                    setActive((current) => (current === item ? null : item))
                  }
                  onMouseEnter={() => setActive(item)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(item)}
                  onBlur={() => setActive(null)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
