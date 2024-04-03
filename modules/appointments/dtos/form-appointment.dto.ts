import { Frequency, Hour } from "@/libs/pde-core/global/@types/schedule.types";

export interface FormAppointmentDtoInterface {
  pacientId: string;
  doctorId: string;
  scheduleDate: Date;
  scheduleHour: Hour;
  title: string;
  description: string;
  frequency: Frequency;
  place: string;
}
