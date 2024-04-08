import { Gender } from "../constants/enums/gender.enum";

export interface UpdatePersonalInformationsDtoInterface {
  name: string;
  email: string;
  phone: string;
  gender: Gender;
}
