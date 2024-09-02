import { DoctorType } from '../../doctor/@types/doctor.type';
import { PacientType } from '../../pacient/@types/pacient.type';
import { Gender } from '../constants/enums/gender.enum';
import { ProfileType } from './profile.type';

export interface UserType {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender?: Gender;
  profiles: ProfileType[];
  doctor?: DoctorType;
  pacient?: PacientType;
  invitationToken?: string;
  password: string;
  is_admin: boolean;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
