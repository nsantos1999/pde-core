import { Frequency, Hour } from '../../../global/@types/schedule.types';
import { DoctorType } from '../../doctor/@types/doctor.type';
import { PacientType } from '../../pacient/@types/pacient.type';
import { AppointmentChangeRequestStatusEnum } from '../constants/enums/appointment-change-request-status.enum';
import { AppointmentUpdateType } from '../constants/enums/appointment-update-type.enum';
import { AppointmentType } from './appointment';

export interface AppointmentChangeRequestType {
  id: number;
  appointment: AppointmentType;
  title: string;
  description?: string;
  schedule_day: Date;
  schedule_hour: Hour;
  frequency: Frequency;
  requestMessage: string;
  refuseMessage?: string;
  updateType: AppointmentUpdateType;
  pacient: PacientType;
  doctor: DoctorType;
  status: AppointmentChangeRequestStatusEnum;
  created_at: Date;
  updated_at: Date;
}
