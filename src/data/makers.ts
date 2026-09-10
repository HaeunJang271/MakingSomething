import type { Maker } from "@/types";

/**
 * Placeholder maker profiles for UI demonstration only.
 * These are not real community members.
 */
export const makers: Maker[] = [
  {
    id: "demo-01",
    name: "Demo Maker A",
    role: "DEVELOPER",
    interests: ["Web", "Systems", "Tools"],
    bio: "Placeholder profile. 실제 멤버 정보가 아닙니다.",
    projects: ["001"],
    isPlaceholder: true,
  },
  {
    id: "demo-02",
    name: "Demo Maker B",
    role: "DESIGNER",
    interests: ["Editorial", "Identity", "Type"],
    bio: "Placeholder profile. 실제 멤버 정보가 아닙니다.",
    projects: ["001"],
    isPlaceholder: true,
  },
  {
    id: "demo-03",
    name: "Demo Maker C",
    role: "ARTIST",
    interests: ["Illustration", "Process", "Mixed media"],
    bio: "Placeholder profile. 실제 멤버 정보가 아닙니다.",
    projects: [],
    isPlaceholder: true,
  },
  {
    id: "demo-04",
    name: "Demo Maker D",
    role: "WRITER",
    interests: ["Essays", "Docs", "Narrative"],
    bio: "Placeholder profile. 실제 멤버 정보가 아닙니다.",
    projects: [],
    isPlaceholder: true,
  },
  {
    id: "demo-05",
    name: "Demo Maker E",
    role: "BEGINNER",
    interests: ["Learning", "Experiments", "Anything"],
    bio: "Placeholder profile. 실제 멤버 정보가 아닙니다.",
    projects: [],
    isPlaceholder: true,
  },
];

/**
 * Returns a maker by id.
 */
export function getMakerById(id: string): Maker | undefined {
  return makers.find((maker) => maker.id === id);
}
