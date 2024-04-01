type Gender = 'male' | 'female';

type PacientGenderPreference =
  | 'Não tenho preferência'
  | 'Psicólogo mulher'
  | 'Psicólogo homem';

type FrequencyCode = 'loose' | 'weekly' | 'biweekly';

interface Frequency {
  name: string;
  code: FrequencyCode;
}

interface Hour {
  name: string;
  code: string;
}

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

  place: string;

  google_event_metadata: GoogleEventMetadata;

  created_at: Date;

  updated_at: Date;
}
