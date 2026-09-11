import { NextResponse } from "next/server";
import { deliverJoinApplication } from "@/lib/join/submit";
import {
  parseJoinApplication,
  validateJoinApplication,
} from "@/lib/join/validate";
import type { JoinSubmitResult } from "@/types/join";

/**
 * Accepts join applications from the /join form.
 */
export async function POST(request: Request): Promise<NextResponse<JoinSubmitResult>> {
  try {
    const raw = await request.json();
    const application = parseJoinApplication(raw);
    const validationError = validateJoinApplication(application);

    if (validationError) {
      console.warn("[api/join] Validation failed", { message: validationError });
      return NextResponse.json(
        { ok: false, message: validationError },
        { status: 400 },
      );
    }

    await deliverJoinApplication(application);

    return NextResponse.json({
      ok: true,
      message: "지원서가 접수되었습니다.",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "지원서 처리 중 오류가 발생했습니다.";
    console.error("[api/join] Submit failed", error);
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
