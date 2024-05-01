import { ProfileEnum } from '../../auth/contants/enums/profile.enum';
import { DoctorType } from '../../doctor/@types/doctor.type';
import { PacientType } from '../../pacient/@types/pacient.type';
import { Gender } from '../constants/enums/gender.enum';

export interface UserType {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender?: Gender;
  profiles: ProfileEnum[];
  doctor?: DoctorType;
  pacient?: PacientType;
  password: string;
  is_admin: boolean;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
