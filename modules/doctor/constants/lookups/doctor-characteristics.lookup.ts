import { DoctorCharacteristicsEnum } from '../enums/doctor-characteristics.enum';

interface DoctorCharacteristicsLookupProps {
  displayText: string;
  showOnAdminPortal: boolean;
}

export const DoctorCharacteristicsLookup: Record<
  DoctorCharacteristicsEnum,
  DoctorCharacteristicsLookupProps
> = {
  [DoctorCharacteristicsEnum.MALE]: {
    displayText: 'Psicólogo homem',
    showOnAdminPortal: false,
  },
  [DoctorCharacteristicsEnum.FEMALE]: {
    displayText: 'Psicóloga mulher',
    showOnAdminPortal: false,
  },
  [DoctorCharacteristicsEnum.CHRISTIAN]: {
    displayText: 'Psicólogo cristão',
    showOnAdminPortal: true,
  },
  [DoctorCharacteristicsEnum.NON_RELIGIOUS]: {
    displayText: 'Psicólogo não religioso',
    showOnAdminPortal: true,
  },
  [DoctorCharacteristicsEnum.LGBTQ_PLUS]: {
    displayText: 'Psicólogo LGBTQ+',
    showOnAdminPortal: true,
  },
  [DoctorCharacteristicsEnum.BLACK]: {
    displayText: 'Psicólogo negro',
    showOnAdminPortal: true,
  },
  [DoctorCharacteristicsEnum.NO_PREFERENCE]: {
    displayText: 'Sem preferencia',
    showOnAdminPortal: false,
  },
};
