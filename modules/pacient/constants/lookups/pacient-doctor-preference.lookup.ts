import { PacientDoctorPreferenceEnum } from '../enums/pacient-doctor-preference.enum';

interface PacientDoctorPreferenceLookupProps {
  displayText: string;
}

export const PacientDoctorPreferenceLookup: Record<
  PacientDoctorPreferenceEnum,
  PacientDoctorPreferenceLookupProps
> = {
  [PacientDoctorPreferenceEnum.MALE]: {
    displayText: 'Psicólogo homem',
  },
  [PacientDoctorPreferenceEnum.FEMALE]: {
    displayText: 'Psicóloga mulher',
  },
  [PacientDoctorPreferenceEnum.CHRISTIAN]: {
    displayText: 'Psicólogo cristão',
  },
  [PacientDoctorPreferenceEnum.NON_RELIGIOUS]: {
    displayText: 'Psicólogo não religioso',
  },
  [PacientDoctorPreferenceEnum.LGBTQ_PLUS]: {
    displayText: 'Psicólogo LGBTQ+',
  },
  [PacientDoctorPreferenceEnum.BLACK]: {
    displayText: 'Psicólogo negro',
  },
  [PacientDoctorPreferenceEnum.NO_PREFERENCE]: {
    displayText: 'Sem preferencia',
  },
};
