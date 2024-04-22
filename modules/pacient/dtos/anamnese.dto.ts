import { PacientMetadata } from "../@types/pacient.type";

export interface AnamneseDtoInterface {
  name: string;
  email: string;
  phone: string;
  age: string;

  metadata: PacientMetadata;
}
