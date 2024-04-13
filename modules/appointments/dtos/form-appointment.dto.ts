import { Frequency, Hour } from '../../../global/@types/schedule.types';
import { AppointmentUpdateType } from '../constants/enums/appointment-update-type.enum';

export interface FormAppointmentDtoInterface {
  pacientId: string;
  doctorId: string;
  scheduleDate: Date;
  scheduleHour: Hour;
  title: string;
  description: string;
  changeRequestMessage?: string;
  frequency: Frequency;
  place: string;
  appointmentUpdateType: AppointmentUpdateType;
}
