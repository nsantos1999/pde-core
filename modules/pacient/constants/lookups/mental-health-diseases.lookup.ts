import { MentalHealthDiseasesEnum } from '../enums/mental-health-diseases.enum';

export type MentalHealthDiseasesLookupInterface<
  T extends string | number | symbol = MentalHealthDiseasesEnum,
> = {
  [key in T]: {
    name: string;
    showInAnamneseQuestionnaire?: boolean;
  };
};

export const MentalHealthDiseasesLookup: MentalHealthDiseasesLookupInterface = {
  [MentalHealthDiseasesEnum.ANXIETY]: {
    name: 'Ansiedade',
  },
  [MentalHealthDiseasesEnum.PANIC]: {
    name: 'Pânico',
  },
  [MentalHealthDiseasesEnum.MELANCHOLY]: {
    name: 'Melancolia',
  },
  [MentalHealthDiseasesEnum.SADNESS]: {
    name: 'Tristeza',
  },
  [MentalHealthDiseasesEnum.ANGUISH]: {
    name: 'Angústia',
  },
  [MentalHealthDiseasesEnum.TRAUMAS]: {
    name: 'Traumas',
  },
  [MentalHealthDiseasesEnum.FAMILY]: {
    name: 'Familia',
  },
  [MentalHealthDiseasesEnum.RELATIONSHIPS]: {
    name: 'Relacionamentos',
  },
  [MentalHealthDiseasesEnum.OTHER]: {
    name: 'Outro',
  },
  [MentalHealthDiseasesEnum.TDAH]: {
    name: 'TDAH',
    showInAnamneseQuestionnaire: true,
  },
  [MentalHealthDiseasesEnum.DEPRESSION]: {
    name: 'Depressão',
    showInAnamneseQuestionnaire: true,
  },
  [MentalHealthDiseasesEnum.GRIEF]: {
    name: 'Luto',
    showInAnamneseQuestionnaire: true,
  },
};
