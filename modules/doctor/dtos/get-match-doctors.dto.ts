import { RecurrenceFrequencyCode } from '../../../global/@types/schedule.types';
import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';
import { ApproachEnum } from '../constants/enums/approach.enum';
import { DoctorCharacteristicsEnum } from '../constants/enums/doctor-characteristics.enum';

export class GetMatchDoctorsDto {
  therapyType: TherapyTypesEnum;
  doctorCharacteristics: DoctorCharacteristicsEnum[];
  approachPreference: ApproachEnum;
  frequency: RecurrenceFrequencyCode;
  validateCode: string;
}
