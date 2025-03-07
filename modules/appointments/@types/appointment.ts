/* eslint-disable import/no-cycle */
import { DoctorType } from '../../doctor/@types/doctor.type';
import { PacientType } from '../../pacient/@types/pacient.type';
import { Hour, Frequency } from '../../../global/@types/schedule.types';
import { AppointmentChangeRequestType } from './appointment-change-request.type';
import { AppointmentRecurrenceEntity } from '../../appointment-recurrence/entities/appointment-recurrence.entity';

interface GoogleEventMetadata {
  google_event_id: string;
  google_event_conferece_object: any;
}

export interface AppointmentType {
  appointment_id: number;

  title: string;

  description: string;

  schedule_day: Date;

  schedule_hour: Hour;

  frequency: Frequency;

  rescheduled: boolean;

  recurrence: AppointmentRecurrenceEntity;

  attendanceConfirmation: boolean;

  doctorAttendanceConfirmation: boolean;

  nonAttendanceJustification: string;

  doctor_id: DoctorType;

  pacient_id: PacientType;

  place: string;

  google_event_metadata: GoogleEventMetadata;

  changeRequests: AppointmentChangeRequestType[];

  created_at: Date;

  updated_at: Date;
}
