import type { Project } from "@/types";

/**
 * V1 project archive. Only real initiative is Project #001.
 * Additional entries must remain clearly marked as examples.
 */
export const projects: Project[] = [
  {
    id: "001",
    number: 1,
    title: "BUILDING THE COLLECTIVE",
    slug: "building-the-collective",
    status: "BUILDING",
    type: "STANDARD",
    duration: "100 DAYS",
    description:
      "MAKE SOMETHING의 첫 번째 프로젝트는 MAKE SOMETHING 자체를 만드는 것입니다.",
    why: "커뮤니티가 존재하려면 먼저 공간이 필요합니다. 우리는 그 공간을 직접 만듭니다.",
    team: "FOUNDING MAKERS",
    progress: 1,
    currentDay: 1,
    totalDays: 100,
    process:
      "아이디어 정의 → 정체성 설계 → 웹사이트 구축 → Maker 모집 → 첫 공개.",
    iterations: [
      "범위가 커지지 않도록 홈페이지와 Project #001에 집중합니다.",
      "완성된 기능보다 공개 가능한 최소 형태를 우선합니다.",
    ],
    result: null,
    creators: ["Demo Maker A", "Demo Maker B"],
    links: [{ label: "Website", href: "/" }],
    timeline: [
      {
        day: 1,
        title: "아이디어가 시작되었습니다.",
        description: "MAKE SOMETHING의 방향과 철학을 문서로 정리하기 시작했습니다.",
        status: "done",
      },
      {
        day: 7,
        title: "첫 번째 Maker를 모집합니다.",
        description: "함께 만들 사람을 찾기 위한 공개 모집을 준비합니다.",
        status: "planned",
      },
      {
        day: 14,
        title: "첫 번째 프로젝트 팀을 구성합니다.",
        description: "역할을 나누고 실행 가능한 작은 범위를 확정합니다.",
        status: "planned",
      },
      {
        day: 30,
        title: "첫 번째 프로토타입을 공개합니다.",
        description: "완성되지 않아도 작동하는 첫 버전을 바깥에 냅니다.",
        status: "planned",
      },
      {
        day: 100,
        title: "MAKE SOMETHING을 공개합니다.",
        description: "커뮤니티의 첫 공식 릴리즈를 목표로 합니다.",
        status: "planned",
      },
    ],
    failureLogs: [
      {
        attempt: 1,
        status: "FAILED",
        problem: "처음부터 너무 많은 기능을 넣으려 했습니다.",
        lesson: "작은 프로토타입부터 시작합니다.",
        next: "범위를 줄입니다.",
        isExample: true,
      },
    ],
  },
];

/**
 * Returns a project by numeric id or slug.
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find(
    (project) => project.id === id || project.slug === id || String(project.number) === id,
  );
}

/**
 * Filters projects by status. Pass ALL to return the full archive.
 */
export function filterProjects(
  status: Project["status"] | "ALL",
): Project[] {
  if (status === "ALL") {
    return projects;
  }
  return projects.filter((project) => project.status === status);
}
