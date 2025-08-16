import { Gender } from '../../user/constants/enums/gender.enum';
import { FrequencyCode } from '../../../global/@types/schedule.types';
import { BillingTypeEnum } from '../../payment/constants/enums/billing-type.enum';
import { PacientHealthStatusEnum } from '../constants/enums/pacient-health-status.enum';
import { TherapyTypesEnum } from '../../appointments/constants/enums/therapy-types.enum';
import { MentalHealthDiseasesEnum } from '../constants/enums/mental-health-diseases.enum';
import { DoctorCharacteristicsEnum } from '../../doctor/constants/enums/doctor-characteristics.enum';
import { DoctorCommunicationStyleEnum } from '../../doctor/constants/enums/doctor-communication-style.enum';

interface RegisterPacientWithRecurrencePacientDataDto {
  name: string;
  email: string;
  phone: string;
  password: string;
  gender: Gender;
  age: number;
  document?: string;
}

interface RegisterPacientWithRecurrencePaymentDataDto {
  type: BillingTypeEnum;
  creditCardToken?: string;
  creditCardExtraData?: {
    postalCode: string;
    addressNumber: string;
  };
}

interface RegisterPacientWithRecurrenceQuestionnaireDataDto {
  therapyType: TherapyTypesEnum;
  mentalHealthDiseases: MentalHealthDiseasesEnum[];
  doctorCharacteristics: DoctorCharacteristicsEnum[];
  doctorCommunicationStyle: DoctorCommunicationStyleEnum;
  healthStatus: PacientHealthStatusEnum;
}

interface RegisterAppointmentDataDto {
  slotId: number;
  frequency: FrequencyCode;
}

export interface RegisterPacientWithRecurrenceDto {
  pacientData: RegisterPacientWithRecurrencePacientDataDto;
  paymentData: RegisterPacientWithRecurrencePaymentDataDto;
  questionnaireData: RegisterPacientWithRecurrenceQuestionnaireDataDto;
  appointmentData: RegisterAppointmentDataDto;
  validateCode: string;
}
