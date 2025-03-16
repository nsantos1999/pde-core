import { FrequencyCode } from '../../../../global/@types/schedule.types';

export interface GetAvailableDateAndSlotsDto {
  pacientId: number;
  doctorId: number;
  startDate: Date;
  frequency: FrequencyCode;
  appointmentId?: number;
}
