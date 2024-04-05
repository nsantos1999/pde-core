import { ProfileEnum } from "../../auth/contants/enums/profile.enum";

export interface UserType {
  id: number;
  name: string;
  email: string;
  phone: string;
  profiles: ProfileEnum[];
  password: string;
  is_admin: boolean;
  created_at: Date;
  updated_at: Date;
}
