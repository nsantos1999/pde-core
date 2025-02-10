import { ProfileEnum } from '../../auth/contants/enums/profile.enum';
import { Gender } from '../constants/enums/gender.enum';

export interface UpdatePersonalInformationsDtoInterface {
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  profiles?: ProfileEnum[];
}
