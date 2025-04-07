import { PacientHealthStatusEnum } from '../enums/pacient-health-status.enum';

interface PacientHealthStatusLookupProps {
  displayText: string;
}

export const PacientHealthStatusLookup: Record<
  PacientHealthStatusEnum,
  PacientHealthStatusLookupProps
> = {
  [PacientHealthStatusEnum.GOOD]: {
    displayText: 'Boa',
  },
  [PacientHealthStatusEnum.OK]: {
    displayText: 'Ok',
  },
  [PacientHealthStatusEnum.BAD]: {
    displayText: 'Ruim',
  },
};
