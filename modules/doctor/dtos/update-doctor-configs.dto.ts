import { TimeAvailability } from '../../../global/@types/schedule.types';
import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';
import { DoctorCharacteristicsEnum } from '../constants/enums/doctor-characteristics.enum';

export interface UpdateDoctorConfigsDtoInterface {
  time_availability: TimeAvailability;
  approach: string[];
  crp_number: string;
  description: string;
  characteristics: DoctorCharacteristicsEnum[];
  therapyTypes: TherapyTypesEnum[];
  internalRating?: number;
}
