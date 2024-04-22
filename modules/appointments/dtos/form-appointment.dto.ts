import { Frequency, Hour } from "../../../global/@types/schedule.types";
import { AppointmentUpdateTypeEnum } from "../constants/enums/appointment-update-type.enum";

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
  appointmentUpdateType: AppointmentUpdateTypeEnum;
}
