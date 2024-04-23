import { TimeAvailability } from '../../../global/@types/schedule.types';
import { Gender } from '../../user/constants/enums/gender.enum';
import { PacientMetadata } from '../@types/pacient.type';

export interface AnamneseDtoInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  age: string;
  gender: Gender;
  time_availability: TimeAvailability;

  metadata: PacientMetadata;
}
