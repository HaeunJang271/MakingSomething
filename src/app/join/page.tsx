import type { Metadata } from "next";
import { JoinPageContent } from "@/components/join/JoinPageContent";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "지원하기",
  path: "/join",
  description: "MAKE SOMETHING에 참여하고 실제 프로젝트를 만드세요.",
});

/**
 * Join application page.
 */
export default function JoinPage() {
  return <JoinPageContent />;
}
