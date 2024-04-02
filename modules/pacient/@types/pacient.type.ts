import { UserType } from '../../user/@types/user.type';

type PacientGenderPreference =
  | 'Não tenho preferência'
  | 'Psicólogo mulher'
  | 'Psicólogo homem';

type FrequencyCode = 'loose' | 'weekly' | 'biweekly';

type PacientMetadata = {
  gender_preference: PacientGenderPreference;
  meal_quality: string;
  sunlight_level: string;
  sleep_quality: string;
  physical_activity_level: string;
  hidration_level: string;
  emotional_control_level: string;
  where_came_from?: string;
  approach_preference?: string;
  mental_health_diseases?: string[];
  appointment_frequency?: FrequencyCode;
};

export interface PacientType {
  pacient_id: number;

  user: UserType;

  name: string;

  phone: string;

  email: string;

  // time_availability: TimeAvailability;

  is_active: boolean;

  metadata: PacientMetadata;

  age: number;

  created_at: Date;

  updated_at: Date;
}
