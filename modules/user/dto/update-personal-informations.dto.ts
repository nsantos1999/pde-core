import { Gender } from '../constants/enums/gender.enum';
import { ProfileEnum } from '../../auth/contants/enums/profile.enum';

export interface UpdatePersonalInformationsDtoInterface {
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  profiles?: ProfileEnum[];
}
