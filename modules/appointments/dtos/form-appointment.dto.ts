import { Hour, Frequency } from '../../../global/@types/schedule.types';
import { AppointmentUpdateTypeEnum } from '../constants/enums/appointment-update-type.enum';

export interface FormAppointmentDtoInterface {
  pacientId: string;
  doctorId: string;
  scheduleDate: Date | string;
  scheduleHour: Hour;
  title: string;
  description: string;
  changeRequestMessage?: string;
  frequency: Frequency;
  place: string;
  appointmentUpdateType: AppointmentUpdateTypeEnum;
}
