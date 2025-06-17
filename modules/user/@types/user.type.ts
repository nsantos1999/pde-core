import { ProfileType } from './profile.type';
import { FileType } from '../../file/@types/file.type';
import { Gender } from '../constants/enums/gender.enum';
import type { DoctorType } from '../../doctor/@types/doctor.type';
import type { PacientType } from '../../pacient/@types/pacient.type';

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
  profilePictureFile?: FileType;
  paymentCustomerId?: string;
  created_at: Date;
  updated_at: Date;
}
