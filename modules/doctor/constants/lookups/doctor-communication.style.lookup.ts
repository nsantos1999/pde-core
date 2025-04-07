import { DoctorCommunicationStyleEnum } from '../enums/doctor-communication-style.enum';

interface DoctorCommunicationStyleLookupProps {
  displayText: string;
}

export const DoctorCommunicationStyleLookup: Record<
  DoctorCommunicationStyleEnum,
  DoctorCommunicationStyleLookupProps
> = {
  [DoctorCommunicationStyleEnum.ASSERTIVE]: {
    displayText: 'Assertivo',
  },
  [DoctorCommunicationStyleEnum.GENTLE]: {
    displayText: 'Gentil',
  },
  [DoctorCommunicationStyleEnum.NO_PREFERENCE]: {
    displayText: 'Tanto faz',
  },
};
