import { FrequencyCode } from "../../@types/schedule.types";

export type FrequencyLookupInterface<
  T extends string | number | symbol = FrequencyCode
> = {
  [key in T]: {
    name: string;
  };
};

export const FrequencyLookup: FrequencyLookupInterface = {
  [FrequencyCode.LOSE]: {
    name: "Avulso",
  },
  [FrequencyCode.WEEKLY]: {
    name: "Semanal",
  },
  [FrequencyCode.BIWEEKLY]: {
    name: "Quinzenal",
  },
};
