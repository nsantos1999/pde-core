import { Gender } from '../enums/gender.enum';

export type GenderLookupInterface<T extends string | number | symbol = Gender> =
  {
    [key in T]: {
      name: string;
    };
  };

export const GenderLookup: GenderLookupInterface = {
  [Gender.MALE]: {
    name: 'Masculino',
  },
  [Gender.FEMALE]: {
    name: 'Feminino',
  },
  [Gender.OTHER]: {
    name: 'Outro',
  },
};
