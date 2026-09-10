import { describe, expect, it } from "vitest";
import { cn, formatDay, formatProjectNumber } from "@/lib/utils";
import { filterProjects, getProjectById } from "@/data/projects";
import { getMakerById } from "@/data/makers";

describe("utils", () => {
  it("joins class names", () => {
    expect(cn("a", false, "b", undefined)).toBe("a b");
  });

  it("formats day labels", () => {
    expect(formatDay(1)).toBe("DAY 01");
    expect(formatDay(14)).toBe("DAY 14");
  });

  it("formats project numbers", () => {
    expect(formatProjectNumber(1)).toBe("PROJECT #001");
  });
});

describe("project data", () => {
  it("finds project 001", () => {
    const project = getProjectById("001");
    expect(project?.title).toBe("BUILDING THE COLLECTIVE");
  });

  it("filters by status", () => {
    expect(filterProjects("BUILDING")).toHaveLength(1);
    expect(filterProjects("RELEASED")).toHaveLength(0);
  });
});

describe("maker data", () => {
  it("returns placeholder makers only", () => {
    const maker = getMakerById("demo-01");
    expect(maker?.isPlaceholder).toBe(true);
  });
});
