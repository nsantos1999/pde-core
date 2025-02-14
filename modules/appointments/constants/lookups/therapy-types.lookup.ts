import { TherapyTypesEnum } from '../enums/therapy-types.enum';

interface TherapyRecordMetadata {
  name: string;
}

export const TherapyTypesLookup: Record<
  TherapyTypesEnum,
  TherapyRecordMetadata
> = {
  [TherapyTypesEnum.INDIVIDUAL]: {
    name: 'Individual',
  },
  [TherapyTypesEnum.COUPLES]: {
    name: 'Casal',
  },
  [TherapyTypesEnum.ADOLESCENT]: {
    name: 'Adolescente',
  },
};
