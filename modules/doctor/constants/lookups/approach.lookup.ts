import { ApproachEnum } from '../enums/approach.enum';

export type ApproachLookupInterface<T extends string | number | symbol = ApproachEnum> = {
  [key in T]: {
    displayText: string;
  };
};

export const ApproachLookup: ApproachLookupInterface = {
  [ApproachEnum.SEM_PREFERENCIA]: {
    displayText: 'Não tenho preferência / Não sei escolher',
  },
  [ApproachEnum.COMPORTAMENTAL_COGNITIVO]: {
    displayText: 'Terapia cognitivo comportamental (TCC)',
  },
  [ApproachEnum.HUMANISTA]: {
    displayText: 'Humanista',
  },
  [ApproachEnum.ANALISE_COMPORTAMENTO]: {
    displayText: 'Análise do Comportamento',
  },
  [ApproachEnum.PSICANALISE]: {
    displayText: 'Psicanálise',
  },
  [ApproachEnum.GESTALT]: {
    displayText: 'Gestalt',
  },
  [ApproachEnum.FENOMENOLOGICA_EXISTENCIAL]: {
    displayText: 'Fenomenológica-existencial',
  },
  [ApproachEnum.COMPORTAMENTAL_CONTEXTUAL]: {
    displayText: 'Comportamental Contextual',
  },
  [ApproachEnum.OUTRO]: {
    displayText: 'Outro',
  },
};
