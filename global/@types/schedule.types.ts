export interface Hour {
  name: string;
  code: string;
}

export enum FrequencyCode {
  LOSE = "loose",
  WEEKLY = "weekly",
  BIWEEKLY = "biweekly",
}

export interface Frequency {
  name: string;
  code: FrequencyCode;
}
