/**
 * Shared domain types for MAKE SOMETHING V1 mock data.
 */

export type ProjectStatus = "BUILDING" | "RECRUITING" | "RELEASED" | "PAUSED";

export type ProjectType = "MINI" | "STANDARD" | "LONG";

export type TimelineEntryStatus = "done" | "planned";

export interface TimelineEntry {
  day: number;
  title: string;
  description: string;
  status: TimelineEntryStatus;
  image?: string;
  link?: string;
}

export interface FailureLog {
  attempt: number;
  status: "FAILED" | "ITERATED" | "RESOLVED";
  problem: string;
  lesson: string;
  next: string;
  isExample?: boolean;
}

export interface Project {
  id: string;
  number: number;
  title: string;
  slug: string;
  status: ProjectStatus;
  type: ProjectType;
  duration: string;
  description: string;
  why: string;
  team: string;
  progress: number;
  currentDay: number;
  totalDays: number;
  timeline: TimelineEntry[];
  failureLogs: FailureLog[];
  result: string | null;
  creators: string[];
  process?: string;
  iterations?: string[];
  links?: { label: string; href: string }[];
}

export type MakerRole =
  | "DEVELOPER"
  | "DESIGNER"
  | "ARTIST"
  | "WRITER"
  | "RESEARCHER"
  | "MUSICIAN"
  | "PLANNER"
  | "BEGINNER";

export interface Maker {
  id: string;
  name: string;
  role: MakerRole;
  interests: string[];
  bio: string;
  projects: string[];
  isPlaceholder: boolean;
}
