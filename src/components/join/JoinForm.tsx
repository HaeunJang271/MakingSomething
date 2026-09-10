"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

const makeOptions = [
  "개발자",
  "디자이너",
  "아티스트",
  "작가",
  "뮤지션",
  "게임 크리에이터",
  "리서처",
  "기획자",
  "입문자",
  "기타",
] as const;

/**
 * Join application form with a frontend-only submission stub.
 * Integration point: replace handleSubmit with Formspree / Tally / custom API.
 */
export function JoinForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const agreement = data.get("agreement");

    if (!name || !email || !agreement) {
      setError("필수 항목을 확인해주세요.");
      console.warn("[JoinForm] Validation failed", { name: !!name, email: !!email });
      return;
    }

    // V1 integration point — wire to Formspree/Tally/API here.
    console.info("[JoinForm] Application captured (frontend only)", {
      name,
      email,
      make: data.getAll("make"),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-border bg-bg-elevated px-6 py-16 text-center md:px-10">
        <p className="font-mono text-[11px] tracking-[0.16em] text-accent">
          지원서가 접수되었습니다.
        </p>
        <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight md:text-4xl">
          이제 무언가를 만들 준비가 되었습니다.
        </h2>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      <Field label="01 — 이름 / 닉네임" htmlFor="name" required>
        <input
          id="name"
          name="name"
          required
          className={inputClass}
          autoComplete="nickname"
        />
      </Field>

      <Field label="02 — 이메일" htmlFor="email" required>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClass}
          autoComplete="email"
        />
      </Field>

      <fieldset>
        <legend className={labelClass}>03 — 무엇을 만드나요?</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {makeOptions.map((option) => (
            <label
              key={option}
              className="flex min-h-11 cursor-pointer items-center gap-3 border border-border px-4 py-3 text-sm hover:border-fg"
            >
              <input
                type="checkbox"
                name="make"
                value={option}
                className="accent-[var(--accent)]"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="04 — 무엇을 만들고 싶나요?" htmlFor="wantMake" required>
        <textarea
          id="wantMake"
          name="wantMake"
          required
          rows={5}
          className={inputClass}
        />
      </Field>

      <Field label="05 — 무엇을 할 수 있나요?" htmlFor="canDo" required>
        <textarea id="canDo" name="canDo" required rows={4} className={inputClass} />
      </Field>

      <Field label="06 — 무엇을 배우고 싶나요?" htmlFor="wantLearn">
        <textarea id="wantLearn" name="wantLearn" rows={4} className={inputClass} />
      </Field>

      <fieldset id="idea">
        <legend className={labelClass}>
          07 — 기존 프로젝트에 참여하고 싶나요?
        </legend>
        <RadioGroup name="joinExisting" options={["예", "아니요", "잘 모르겠어요"]} />
      </fieldset>

      <fieldset>
        <legend className={labelClass}>08 — 나만의 아이디어가 있나요?</legend>
        <RadioGroup name="ownIdea" options={["예", "아니요"]} />
      </fieldset>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="09 — GitHub" htmlFor="github">
          <input
            id="github"
            name="github"
            className={inputClass}
            placeholder="선택 사항"
          />
        </Field>
        <Field label="09 — 포트폴리오" htmlFor="portfolio">
          <input
            id="portfolio"
            name="portfolio"
            className={inputClass}
            placeholder="선택 사항"
          />
        </Field>
        <Field label="09 — 웹사이트" htmlFor="website">
          <input
            id="website"
            name="website"
            className={inputClass}
            placeholder="선택 사항"
          />
        </Field>
        <Field label="09 — 기타 링크" htmlFor="other">
          <input
            id="other"
            name="other"
            className={inputClass}
            placeholder="선택 사항"
          />
        </Field>
      </div>

      <label className="flex items-start gap-3 border border-border p-4 text-sm leading-relaxed">
        <input
          type="checkbox"
          name="agreement"
          required
          className="mt-1 accent-[var(--accent)]"
        />
        <span>
          MAKE SOMETHING은 프로젝트 기반 커뮤니티이며, 참여는 실제 프로젝트에
          기여하는 것임을 이해합니다.
        </span>
      </label>

      {error ? (
        <p className="font-mono text-sm text-accent" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="w-full border border-accent bg-accent px-6 py-4 font-mono text-sm tracking-[0.14em] text-white transition-colors hover:bg-fg hover:border-fg md:w-auto"
      >
        MAKE SOMETHING 지원하기 →
      </button>
    </form>
  );
}

const inputClass =
  "mt-3 w-full border border-border bg-transparent px-4 py-3.5 text-base outline-none transition-colors focus:border-fg";

const labelClass = "text-sm tracking-normal text-muted";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required ? " *" : ""}
      </label>
      {children}
    </div>
  );
}

function RadioGroup({
  name,
  options,
}: {
  name: string;
  options: string[];
}) {
  return (
    <div className={cn("mt-4 flex flex-wrap gap-3")}>
      {options.map((option) => (
        <label
          key={option}
          className="flex min-h-11 cursor-pointer items-center gap-3 border border-border px-4 py-3 text-sm hover:border-fg"
        >
          <input
            type="radio"
            name={name}
            value={option}
            className="accent-[var(--accent)]"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

/**
 * Join page shell with form.
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
