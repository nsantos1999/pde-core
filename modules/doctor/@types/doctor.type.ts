import { DayType } from '../../day/@types/day.type';
import { UserType } from '../../user/@types/user.type';
import { TimeAvailability } from '../../../global/@types/schedule.types';
import { MultiSelectOption } from '../../../global/@types/multiselect-option.types';
import { DoctorCharacteristicType } from './doctor-characteristic.type';
import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';

export interface DoctorType {
  doctor_id: number;
  user: UserType;
  name: string;
  email: string;
  phone: string;
  crp_number: string;
  description?: string;
  approach: MultiSelectOption[];
  days: DayType[];
  time_availability: TimeAvailability;
  characteristics: DoctorCharacteristicType[];
  therapyTypes: TherapyTypesEnum[];
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
