import type { JoinApplication } from "@/types/join";

/**
 * Delivers a validated join application to the configured provider.
 * Priority: webhook → Formspree → FormSubmit email → development console.
 */
export async function deliverJoinApplication(
  application: JoinApplication,
): Promise<void> {
  const formspreeId = process.env.FORMSPREE_FORM_ID?.trim();
  const notifyEmail = process.env.JOIN_NOTIFY_EMAIL?.trim();
  const webhookUrl = process.env.JOIN_WEBHOOK_URL?.trim();

  if (webhookUrl) {
    await postJson(webhookUrl, application, "JOIN_WEBHOOK_URL");
    return;
  }

  if (formspreeId) {
    await postJson(
      `https://formspree.io/f/${formspreeId}`,
      toProviderPayload(application),
      "Formspree",
    );
    return;
  }

  if (notifyEmail) {
    await postFormSubmit(notifyEmail, application);
    return;
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[join] Development fallback — application received", {
      name: application.name,
      email: application.email,
      make: application.make,
    });
    return;
  }

  throw new Error(
    "모집 폼 수신 설정이 없습니다. FORMSPREE_FORM_ID 또는 JOIN_NOTIFY_EMAIL을 설정해주세요.",
  );
}

function toProviderPayload(application: JoinApplication): Record<string, string> {
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
  };
}

/**
 * Sends via FormSubmit. First submission triggers an activation email.
 */
async function postFormSubmit(
  notifyEmail: string,
  application: JoinApplication,
): Promise<void> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...toProviderPayload(application),
        _subject: `[MAKE SOMETHING] 새 지원 — ${application.name}`,
        _template: "table",
        _captcha: "false",
        _honey: "",
      }),
    },
  );

  const text = await response.text();
  let parsed: { success?: string | boolean; message?: string } = {};
  try {
    parsed = JSON.parse(text) as typeof parsed;
  } catch {
    parsed = {};
  }

  const success =
    parsed.success === true ||
    parsed.success === "true" ||
    (response.ok && parsed.success !== false && parsed.success !== "false");

  if (!success) {
    console.error("[join] FormSubmit delivery failed", {
      status: response.status,
      detail: text.slice(0, 400),
    });
    throw new Error(
      parsed.message ||
        "지원서 전송에 실패했습니다. 수신 이메일 활성화가 필요할 수 있습니다.",
    );
  }

  console.info("[join] Delivered via FormSubmit", {
    to: notifyEmail,
    message: parsed.message,
  });
}

async function postJson(
  url: string,
  body: unknown,
  provider: string,
): Promise<void> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error(`[join] ${provider} delivery failed`, {
      status: response.status,
      detail: detail.slice(0, 300),
    });
    throw new Error("지원서 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
  }

  console.info(`[join] Delivered via ${provider}`);
}
