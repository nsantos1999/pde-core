import { HourFrame } from '../../../../global/@types/schedule.types';

export interface DaysAndSlotsResponseDto {
  date: Date;
  timeframes: HourFrame[];
}
