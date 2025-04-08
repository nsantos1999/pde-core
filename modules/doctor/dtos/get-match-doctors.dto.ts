import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';
import { DoctorCharacteristicType } from '../@types/doctor-characteristic.type';
import { ApproachEnum } from '../constants/enums/approach.enum';

export class GetMatchDoctorsDto {
  therapyType: TherapyTypesEnum;
  doctorCharacteristics: DoctorCharacteristicType[];
  approachPreference: ApproachEnum;
}
