import type { JoinApplication } from "@/types/join";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates a join application and returns Korean error messages.
 */
export function validateJoinApplication(
  input: Partial<JoinApplication>,
): string | null {
  if (!input.name?.trim()) {
    return "이름 / 닉네임을 입력해주세요.";
  }
  if (!input.email?.trim()) {
    return "이메일을 입력해주세요.";
  }
  if (!EMAIL_PATTERN.test(input.email.trim())) {
    return "올바른 이메일 형식이 아닙니다.";
  }
  if (!input.make || input.make.length === 0) {
    return "무엇을 만드는지 하나 이상 선택해주세요.";
  }
  if (!input.wantMake?.trim()) {
    return "무엇을 만들고 싶은지 적어주세요.";
  }
  if (!input.canDo?.trim()) {
    return "무엇을 할 수 있는지 적어주세요.";
  }
  if (!input.joinExisting?.trim()) {
    return "기존 프로젝트 참여 여부를 선택해주세요.";
  }
  if (!input.ownIdea?.trim()) {
    return "나만의 아이디어 여부를 선택해주세요.";
  }
  if (!input.agreement) {
    return "참여 안내 동의에 체크해주세요.";
  }
  return null;
}

/**
 * Normalizes raw form / JSON input into a JoinApplication.
 */
export function parseJoinApplication(raw: unknown): JoinApplication {
  const data = (raw ?? {}) as Record<string, unknown>;
  const makeValue = data.make;

  return {
    name: String(data.name ?? "").trim(),
    email: String(data.email ?? "").trim(),
    make: Array.isArray(makeValue)
      ? makeValue
          .map((item) => String(item).trim())
          .filter(Boolean)
      : typeof makeValue === "string" && makeValue.trim()
        ? [makeValue.trim()]
        : [],
    wantMake: String(data.wantMake ?? "").trim(),
    canDo: String(data.canDo ?? "").trim(),
    wantLearn: String(data.wantLearn ?? "").trim(),
    joinExisting: String(data.joinExisting ?? "").trim(),
    ownIdea: String(data.ownIdea ?? "").trim(),
    github: String(data.github ?? "").trim(),
    portfolio: String(data.portfolio ?? "").trim(),
    website: String(data.website ?? "").trim(),
    other: String(data.other ?? "").trim(),
    agreement:
      data.agreement === true ||
      data.agreement === "on" ||
      data.agreement === "true" ||
      data.agreement === "1",
  };
}
