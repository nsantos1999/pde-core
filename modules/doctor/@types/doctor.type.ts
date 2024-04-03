import { Gender } from "@/libs/pde-core/global/@types/gender.types";
import { UserType } from "../../user/@types/user.type";
import { MultiSelectOption } from "@/libs/pde-core/global/@types/multiselect-option.types";

export interface DoctorType {
  doctor_id: number;
  user: UserType;
  name: string;
  gender: Gender;
  email: string;
  phone: string;
  crp_number: string;
  approach: MultiSelectOption[];
  time_availability: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
