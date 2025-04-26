import { UserType } from '../../user/@types/user.type';
import { PacientGenderPreference } from '../../../global/@types/gender.types';
import {
  FrequencyCode,
  TimeAvailability,
} from '../../../global/@types/schedule.types';
import { DoctorCharacteristicsEnum } from '../../doctor/constants/enums/doctor-characteristics.enum';
import { DoctorCommunicationStyleEnum } from '../../doctor/constants/enums/doctor-communication-style.enum';
import { PacientHealthStatusEnum } from '../constants/enums/pacient-health-status.enum';
import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';

export type PacientMetadata = {
  gender_preference: PacientGenderPreference;
  doctor_characteristics?: DoctorCharacteristicsEnum[];
  doctor_communication_style?: DoctorCommunicationStyleEnum;
  health_status?: PacientHealthStatusEnum;
  therapy_type?: TherapyTypesEnum;
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
  selected_start_slot_id?: number;
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
