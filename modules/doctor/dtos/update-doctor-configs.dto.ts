import { TimeAvailability } from '../../../global/@types/schedule.types';
import { DoctorCharacteristicsEnum } from '../constants/enums/doctor-characteristics.enum';

export interface UpdateDoctorConfigsDtoInterface {
  time_availability: TimeAvailability;
  approach: string[];
  crp_number: string;
  description: string;
  characteristics: DoctorCharacteristicsEnum[];
}
