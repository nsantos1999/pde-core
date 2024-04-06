import {
  TimeAvailability,
  Weekday,
} from "@/libs/pde-core/global/@types/schedule.types";

export interface UpdateDoctorConfigsDtoInterface {
  time_availability: TimeAvailability;
  approach: any;
}
