import type { JoinApplication } from "@/types/join";
import {
  getJoinNotifyEmail,
  toFormSubmitPayload,
} from "@/lib/join/formsubmit";

/**
 * Server-side delivery fallback. Prefer client FormSubmit when possible.
 */
export async function deliverJoinApplication(
  application: JoinApplication,
): Promise<void> {
  const formspreeId = process.env.FORMSPREE_FORM_ID?.trim();
  const webhookUrl = process.env.JOIN_WEBHOOK_URL?.trim();
  const notifyEmail = getJoinNotifyEmail();

  if (webhookUrl) {
    await postJson(webhookUrl, application, "JOIN_WEBHOOK_URL");
    return;
  }

  if (formspreeId) {
    await postJson(
      `https://formspree.io/f/${formspreeId}`,
      toFormSubmitPayload(application),
      "Formspree",
    );
    return;
  }

  if (notifyEmail) {
    // FormSubmit often blocks serverless IPs — kept as last-resort fallback.
    await postJson(
      `https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail)}`,
      toFormSubmitPayload(application),
      "FormSubmit",
    );
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
    "모집 폼 수신 설정이 없습니다. NEXT_PUBLIC_JOIN_NOTIFY_EMAIL을 설정해주세요.",
  );
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
