import type { JoinApplication } from "@/types/join";

/**
 * Builds the FormSubmit payload shared by client and server delivery.
 */
export function toFormSubmitPayload(
  application: JoinApplication,
): Record<string, string> {
  return {
    name: application.name,
    email: application.email,
    make: application.make.join(", "),
    wantMake: application.wantMake,
    canDo: application.canDo,
    wantLearn: application.wantLearn || "(없음)",
    joinExisting: application.joinExisting,
    ownIdea: application.ownIdea,
    github: application.github || "(없음)",
    portfolio: application.portfolio || "(없음)",
    website: application.website || "(없음)",
    other: application.other || "(없음)",
    agreement: "yes",
    _subject: `[MAKE SOMETHING] 새 지원 — ${application.name}`,
    _template: "table",
    _captcha: "false",
  };
}

/**
 * Returns the notify inbox used by FormSubmit.
 */
export function getJoinNotifyEmail(): string | null {
  const email =
    process.env.NEXT_PUBLIC_JOIN_NOTIFY_EMAIL?.trim() ||
    process.env.JOIN_NOTIFY_EMAIL?.trim() ||
    "";
  return email || null;
}

/**
 * Delivers a join application through FormSubmit from the browser.
 * Serverless IPs are often blocked, so client-side delivery is preferred.
 */
export async function deliverJoinViaFormSubmit(
  application: JoinApplication,
  notifyEmail: string,
): Promise<void> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(toFormSubmitPayload(application)),
    },
  );

  const text = await response.text();
  let parsed: { success?: string | boolean; message?: string } = {};
  try {
    parsed = JSON.parse(text) as typeof parsed;
  } catch {
    parsed = {};
  }

  const message = parsed.message ?? "";
  if (/activation|activate form/i.test(message)) {
    console.error("[join] FormSubmit needs activation", { message });
    throw new Error(
      "수신함 활성화가 필요합니다. Gmail에서 FormSubmit 활성화 메일을 확인해주세요.",
    );
  }

  const success =
    parsed.success === true ||
    parsed.success === "true" ||
    (response.ok && parsed.success !== false && parsed.success !== "false");

  if (!success) {
    console.error("[join] FormSubmit failed", {
      status: response.status,
      detail: text.slice(0, 400),
    });
    throw new Error(
      message || "지원서 전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
    );
  }

  console.info("[join] Delivered via FormSubmit (client)");
}
