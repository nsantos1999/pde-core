import { Gender } from '../../user/constants/enums/gender.enum';
import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';
import { MentalHealthDiseasesEnum } from '../../pacient/constants/enums/mental-health-diseases.enum';

export class GetMatchDoctorsDto {
  gender: Gender | undefined;
  mentalHealthDiseases: MentalHealthDiseasesEnum | undefined;
  therapyType: TherapyTypesEnum | undefined;
}
