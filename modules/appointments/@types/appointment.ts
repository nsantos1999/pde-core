import { Frequency, Hour } from "@/libs/pde-core/global/@types/schedule.types";
import { DoctorType } from "../../doctor/@types/doctor.type";
import { PacientType } from "../../pacient/@types/pacient.type";

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

  attendanceConfirmation: boolean;

  doctor_id: DoctorType;

  pacient_id: PacientType;

  place: string;

  google_event_metadata: GoogleEventMetadata;

  created_at: Date;

  updated_at: Date;
}
