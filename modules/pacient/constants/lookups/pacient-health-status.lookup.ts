import { PacientHealthStatusEnum } from '../enums/pacient-health-status.enum';

interface PacientHealthStatusLookupProps {
  displayText: string;
}

export const PacientHealthStatusLookup: Record<
  PacientHealthStatusEnum,
  PacientHealthStatusLookupProps
> = {
  [PacientHealthStatusEnum.GOOD]: {
    displayText: 'Muito boa',
  },
  [PacientHealthStatusEnum.OK]: {
    displayText: 'Boa',
  },
  [PacientHealthStatusEnum.BAD]: {
    displayText: 'Ruim',
  },
};
