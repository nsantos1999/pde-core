import { ProfileEnum } from "../../auth/contants/enums/profile.enum";
import { DoctorType } from "../../doctor/@types/doctor.type";
import { PacientType } from "../../pacient/@types/pacient.type";

export interface UserType {
  id: number;
  name: string;
  email: string;
  phone: string;
  profiles: ProfileEnum[];
  doctor?: DoctorType;
  pacient?: PacientType;
  password: string;
  is_admin: boolean;
  created_at: Date;
  updated_at: Date;
}
