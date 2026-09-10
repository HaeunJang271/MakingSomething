import type { Metadata } from "next";
import { ProjectsArchive } from "@/components/projects/ProjectsArchive";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  path: "/projects",
  description: "우리가 만들고, 실패하고, 공개한 것들.",
});

/**
 * Project archive page.
 */
export default function ProjectsPage() {
  return <ProjectsArchive />;
}
