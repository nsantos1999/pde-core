import { TimeAvailability } from '@/libs/pde-core/global/@types/schedule.types';

export interface UpdateDoctorConfigsDtoInterface {
  time_availability: TimeAvailability;
  approach: string[];
  crp_number: string;
  description: string;
}
