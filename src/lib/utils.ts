/**
 * Joins class name fragments, ignoring falsy values.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/**
 * Formats a project day label, e.g. DAY 01.
 */
export function formatDay(day: number): string {
  return `DAY ${String(day).padStart(2, "0")}`;
}

/**
 * Formats a project number label, e.g. PROJECT #001.
 */
export function formatProjectNumber(number: number): string {
  return `PROJECT #${String(number).padStart(3, "0")}`;
}
