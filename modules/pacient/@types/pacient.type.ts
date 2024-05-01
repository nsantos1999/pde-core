import { PacientGenderPreference } from '../../../global/@types/gender.types';
import {
  FrequencyCode,
  TimeAvailability,
} from '../../../global/@types/schedule.types';
import { UserType } from '../../user/@types/user.type';

export type PacientMetadata = {
  gender_preference: PacientGenderPreference;
  meal_quality: string;
  sunlight_level: string;
  sleep_quality: string;
  physical_activity_level: string;
  hidration_level: string;
  emotional_control_level: string;
  specific_reason: string;
  where_came_from?: string;
  approach_preference?: string;
  mental_health_diseases?: string[];
  mental_health_diseases_other?: string;
  appointment_frequency?: FrequencyCode;
  profession: string;
};

export interface PacientType {
  pacient_id: number;

  user: UserType;

  name: string;

  phone: string;

  email: string;

  time_availability: TimeAvailability;

  is_active: boolean;

  metadata: PacientMetadata;

  age: number;

  hasBeenMatched: boolean;

  created_at: Date;

  updated_at: Date;
}
