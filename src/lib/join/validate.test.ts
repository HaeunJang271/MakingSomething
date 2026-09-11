import { describe, expect, it } from "vitest";
import {
  parseJoinApplication,
  validateJoinApplication,
} from "@/lib/join/validate";

describe("validateJoinApplication", () => {
  const valid = {
    name: "Demo",
    email: "demo@example.com",
    make: ["개발자"],
    wantMake: "웹사이트",
    canDo: "코딩",
    wantLearn: "디자인",
    joinExisting: "예",
    ownIdea: "아니요",
    github: "",
    portfolio: "",
    website: "",
    other: "",
    agreement: true,
  };

  it("accepts a complete application", () => {
    expect(validateJoinApplication(valid)).toBeNull();
  });

  it("rejects missing email", () => {
    expect(validateJoinApplication({ ...valid, email: "" })).toMatch(/이메일/);
  });

  it("rejects missing make selections", () => {
    expect(validateJoinApplication({ ...valid, make: [] })).toMatch(/선택/);
  });

  it("rejects missing agreement", () => {
    expect(validateJoinApplication({ ...valid, agreement: false })).toMatch(
      /동의/,
    );
  });
});

describe("parseJoinApplication", () => {
  it("normalizes checkbox agreement and make arrays", () => {
    const parsed = parseJoinApplication({
      name: " A ",
      email: "a@b.com",
      make: ["작가", "입문자"],
      agreement: "on",
    });
    expect(parsed.name).toBe("A");
    expect(parsed.make).toEqual(["작가", "입문자"]);
    expect(parsed.agreement).toBe(true);
  });
});
