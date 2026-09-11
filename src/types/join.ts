/**
 * Join application payload submitted from /join.
 */
export interface JoinApplication {
  name: string;
  email: string;
  make: string[];
  wantMake: string;
  canDo: string;
  wantLearn: string;
  joinExisting: string;
  ownIdea: string;
  github: string;
  portfolio: string;
  website: string;
  other: string;
  agreement: boolean;
}

/**
 * API response shape for join submissions.
 */
export interface JoinSubmitResult {
  ok: boolean;
  message: string;
}
