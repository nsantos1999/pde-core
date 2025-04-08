import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';

export interface DoctorTherapyType {
  id: number;
  therapyType: TherapyTypesEnum;
  createdAt: Date;
  updatedAt: Date;
}
