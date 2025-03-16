import { FrequencyCode } from 'src/shared/libs/pde-core/global/@types/schedule.types';

export class GetAvailableDateAndSlotsDto {
  pacientId: number;
  doctorId: number;
  startDate: Date;
  frequency: FrequencyCode;
  appointmentId?: number;
}
