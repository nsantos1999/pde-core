import { ProfileEnum } from '../../auth/contants/enums/profile.enum';

export interface RegisterUserDtoInterface {
  name: string;
  email: string;
  phone: string;
  profiles: ProfileEnum[];
}
