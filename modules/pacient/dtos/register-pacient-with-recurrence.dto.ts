import { FrequencyCode } from '../../../global/@types/schedule.types';
import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';
import { BillingTypeEnum } from '../../payment/constants/enums/billing-type.enum';
import { Gender } from '../../user/constants/enums/gender.enum';
import { MentalHealthDiseasesEnum } from '../constants/enums/mental-health-diseases.enum';

interface RegisterPacientWithRecurrencePacientDataDto {
  name: string;
  email: string;
  phone: string;
  password: string;
  gender: Gender;
  age: number;
  document: string;
}

interface RegisterPacientWithRecurrencePaymentDataDto {
  type: BillingTypeEnum;
  creditCardToken?: string;
}

interface RegisterPacientWithRecurrenceQuestionnaireDataDto {
  therapyType: TherapyTypesEnum;
  mentalHealthDiseases: MentalHealthDiseasesEnum;
  frequency: FrequencyCode;
}

export interface RegisterPacientWithRecurrenceDto {
  pacientData: RegisterPacientWithRecurrencePacientDataDto;
  paymentData: RegisterPacientWithRecurrencePaymentDataDto;
  questionnaireData: RegisterPacientWithRecurrenceQuestionnaireDataDto;
  validateCode: string;
}
