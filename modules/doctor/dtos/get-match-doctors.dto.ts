import { Gender } from 'src/shared/libs/pde-core/modules/user/constants/enums/gender.enum';
import { MentalHealthDiseasesEnum } from '../../pacient/constants/enums/mental-health-diseases.enum';
import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';

export class GetMatchDoctorsDto {
  gender: Gender;
  mentalHealthDiseases: MentalHealthDiseasesEnum[];
  therapyType: TherapyTypesEnum;
}
