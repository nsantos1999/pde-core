import { UserType } from "../../user/@types/user.type";

export interface AuthLoginDto {
  email: string;
  password: string;
}

export interface AuthUserDto extends UserType {
  token: string;
}
