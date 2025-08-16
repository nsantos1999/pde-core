import { PacientMetadata } from '../@types/pacient.type';
import { Gender } from '../../user/constants/enums/gender.enum';
import { TimeAvailability } from '../../../global/@types/schedule.types';

export interface AnamneseDtoInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  age: string;
  gender?: Gender;
  time_availability: TimeAvailability;
  profession: string;
  specificReason: string;
  metadata: PacientMetadata;
}
