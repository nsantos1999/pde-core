import { ProfileEnum } from "../contants/enums/profile.enum";

export interface User {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
  profiles: ProfileEnum[];
  created_at: Date;
  updated_at: Date;
}
