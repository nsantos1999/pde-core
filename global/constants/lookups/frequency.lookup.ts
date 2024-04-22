import { FrequencyCode } from "../../@types/schedule.types";

export type FrequencyLookupInterface<
  T extends string | number | symbol = FrequencyCode
> = {
  [key in T]: {
    name: string;
    planName?: string;
  };
};

export const FrequencyLookup: FrequencyLookupInterface = {
  [FrequencyCode.LOSE]: {
    name: "Avulso",
  },
  [FrequencyCode.WEEKLY]: {
    name: "Semanal",
    planName: "Plano Pro",
  },
  [FrequencyCode.BIWEEKLY]: {
    name: "Quinzenal",
    planName: "Plano Start",
  },
};
