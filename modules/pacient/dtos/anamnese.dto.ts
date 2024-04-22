import { TimeAvailability } from "@/libs/pde-core/global/@types/schedule.types";
import { PacientMetadata } from "../@types/pacient.type";

export interface AnamneseDtoInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  age: string;
  time_availability: TimeAvailability;

  metadata: PacientMetadata;
}
