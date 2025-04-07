import { DoctorCharacteristicsEnum } from '../constants/enums/doctor-characteristics.enum';

export interface DoctorCharacteristicType {
  id: number;
  characteristic: DoctorCharacteristicsEnum;
  createdAt: Date;
  updatedAt: Date;
}
