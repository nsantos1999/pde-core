import { FrequencyCode } from '../../../global/@types/schedule.types';
import { PacientGenderPreference } from '../../../global/@types/gender.types';

export interface PacientPreferencesDtoInterface {
  metadata?: {
    profession: string;
    mental_health_diseases: string[];
    mental_health_diseases_other: string;
    specific_reason: string;
    gender_preference: PacientGenderPreference;
    approach_preference: string;
    appointment_frequency?: FrequencyCode;
  };
}
