import { FrequencyCode } from '../../@types/schedule.types';

export type FrequencyLookupInterface<T extends string | number | symbol = FrequencyCode> = {
  [key in T]: {
    name: string;
    planName?: string;
    priceBrl: number;
  };
};

export const FrequencyLookup: FrequencyLookupInterface = {
  [FrequencyCode.LOSE]: {
    name: 'Avulso',
    priceBrl: 0,
  },
  [FrequencyCode.WEEKLY]: {
    name: 'Semanal',
    planName: 'Plano Pro',
    priceBrl: 280,
  },
  [FrequencyCode.BIWEEKLY]: {
    name: 'Quinzenal',
    planName: 'Plano Start',
    priceBrl: 140,
  },
};
