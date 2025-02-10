// eslint-disable-next-line import/no-cycle
import { AppointmentType } from './appointment';
import { DoctorType } from '../../doctor/@types/doctor.type';
import { PacientType } from '../../pacient/@types/pacient.type';
import { Hour, Frequency } from '../../../global/@types/schedule.types';
import { AppointmentUpdateTypeEnum } from '../constants/enums/appointment-update-type.enum';
import { AppointmentChangeRequestStatusEnum } from '../constants/enums/appointment-change-request-status.enum';

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
  updateType: AppointmentUpdateTypeEnum;
  pacient: PacientType;
  doctor: DoctorType;
  status: AppointmentChangeRequestStatusEnum;
  created_at: Date;
  updated_at: Date;
}
