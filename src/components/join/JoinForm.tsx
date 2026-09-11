"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";
import type { JoinSubmitResult } from "@/types/join";

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
 * Join application form that posts to /api/join.
 */
export function JoinForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedMake, setSelectedMake] = useState<string[]>([]);

  function toggleMake(option: string) {
    setSelectedMake((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (selectedMake.length === 0) {
      setError("무엇을 만드는지 하나 이상 선택해주세요.");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      make: selectedMake,
      wantMake: String(data.get("wantMake") ?? ""),
      canDo: String(data.get("canDo") ?? ""),
      wantLearn: String(data.get("wantLearn") ?? ""),
      joinExisting: String(data.get("joinExisting") ?? ""),
      ownIdea: String(data.get("ownIdea") ?? ""),
      github: String(data.get("github") ?? ""),
      portfolio: String(data.get("portfolio") ?? ""),
      website: String(data.get("website") ?? ""),
      other: String(data.get("other") ?? ""),
      agreement: data.get("agreement") === "on",
    };

    setPending(true);
    console.info("[JoinForm] Submitting application", {
      email: payload.email,
      make: payload.make,
    });

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as JoinSubmitResult;

      if (!response.ok || !result.ok) {
        setError(result.message || "지원서 전송에 실패했습니다.");
        return;
      }

      setSubmitted(true);
      setSelectedMake([]);
      form.reset();
    } catch (submitError) {
      console.error("[JoinForm] Network error", submitError);
      setError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setPending(false);
    }
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
        <p className="mt-4 text-sm text-muted">
          확인 후 이메일로 연락드리겠습니다.
        </p>
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
          disabled={pending}
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
          disabled={pending}
          className={inputClass}
          autoComplete="email"
        />
      </Field>

      <fieldset disabled={pending}>
        <legend className={labelClass}>03 — 무엇을 만드나요? *</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {makeOptions.map((option) => {
            const checked = selectedMake.includes(option);
            return (
              <label
                key={option}
                className={cn(
                  "flex min-h-11 cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors",
                  checked ? "border-fg bg-bg-elevated" : "border-border hover:border-fg",
                )}
              >
                <input
                  type="checkbox"
                  name="make"
                  value={option}
                  checked={checked}
                  onChange={() => toggleMake(option)}
                  className="accent-[var(--accent)]"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <Field label="04 — 무엇을 만들고 싶나요?" htmlFor="wantMake" required>
        <textarea
          id="wantMake"
          name="wantMake"
          required
          rows={5}
          disabled={pending}
          className={inputClass}
        />
      </Field>

      <Field label="05 — 무엇을 할 수 있나요?" htmlFor="canDo" required>
        <textarea
          id="canDo"
          name="canDo"
          required
          rows={4}
          disabled={pending}
          className={inputClass}
        />
      </Field>

      <Field label="06 — 무엇을 배우고 싶나요?" htmlFor="wantLearn">
        <textarea
          id="wantLearn"
          name="wantLearn"
          rows={4}
          disabled={pending}
          className={inputClass}
        />
      </Field>

      <fieldset id="idea" disabled={pending}>
        <legend className={labelClass}>
          07 — 기존 프로젝트에 참여하고 싶나요? *
        </legend>
        <RadioGroup name="joinExisting" options={["예", "아니요", "잘 모르겠어요"]} />
      </fieldset>

      <fieldset disabled={pending}>
        <legend className={labelClass}>08 — 나만의 아이디어가 있나요? *</legend>
        <RadioGroup name="ownIdea" options={["예", "아니요"]} />
      </fieldset>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="09 — GitHub" htmlFor="github">
          <input
            id="github"
            name="github"
            disabled={pending}
            className={inputClass}
            placeholder="선택 사항"
          />
        </Field>
        <Field label="09 — 포트폴리오" htmlFor="portfolio">
          <input
            id="portfolio"
            name="portfolio"
            disabled={pending}
            className={inputClass}
            placeholder="선택 사항"
          />
        </Field>
        <Field label="09 — 웹사이트" htmlFor="website">
          <input
            id="website"
            name="website"
            disabled={pending}
            className={inputClass}
            placeholder="선택 사항"
          />
        </Field>
        <Field label="09 — 기타 링크" htmlFor="other">
          <input
            id="other"
            name="other"
            disabled={pending}
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
          disabled={pending}
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
        disabled={pending}
        className="w-full border border-accent bg-accent px-6 py-4 font-mono text-sm tracking-[0.14em] text-white transition-colors hover:bg-fg hover:border-fg disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {pending ? "제출 중…" : "MAKE SOMETHING 지원하기 →"}
      </button>
    </form>
  );
}

const inputClass =
  "mt-3 w-full border border-border bg-transparent px-4 py-3.5 text-base outline-none transition-colors focus:border-fg disabled:opacity-60";

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
