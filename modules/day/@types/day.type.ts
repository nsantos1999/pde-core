import { SlotType } from '../../slot/@types/slot.type';
import { DoctorType } from '../../doctor/@types/doctor.type';
import { Month, Weekday } from '../../../global/@types/schedule.types';

export interface DayType {
  day_id: number;
  year: number;
  month_label: Month;
  week_day_label: Weekday;
  date: Date;
  doctor_id: DoctorType;
  slots: SlotType[];
}
