import { ApproachEnum } from '../constants/enums/approach.enum';
import { RecurrenceFrequencyCode } from '../../../global/@types/schedule.types';
import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';
import { DoctorCharacteristicsEnum } from '../constants/enums/doctor-characteristics.enum';

export class GetMatchDoctorsDto {
  therapyType: TherapyTypesEnum | undefined;
  doctorCharacteristics: DoctorCharacteristicsEnum[] | undefined;
  approachPreferences: ApproachEnum[] | undefined;
  frequency: RecurrenceFrequencyCode | undefined;
  validateCode: string | undefined;
}
