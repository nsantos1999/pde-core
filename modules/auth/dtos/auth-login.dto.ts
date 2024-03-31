import { User } from "../entities/user.entity";

export interface AuthLoginDto {
  email: string;
  password: string;
}

export interface AuthUserDto extends User {
  token: string;
}
