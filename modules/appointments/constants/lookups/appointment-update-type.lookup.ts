import { AppointmentUpdateTypeEnum } from '../enums/appointment-update-type.enum';

export type AppointmentUpdateTypeLookupInterface<
  T extends string | number | symbol = AppointmentUpdateTypeEnum,
> = {
  [key in T]: {
    name: string;
  };
};

export const AppointmentUpdateTypeLookup: AppointmentUpdateTypeLookupInterface = {
  [AppointmentUpdateTypeEnum.JUST_THIS_ONE]: {
    name: 'Apenas esta',
  },
  [AppointmentUpdateTypeEnum.THIS_AND_THE_NEXT_ONES]: {
    name: 'Esta e as próximas',
  },
};
