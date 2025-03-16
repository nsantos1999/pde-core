import { HourFrame } from '../../../../global/@types/schedule.types';

export class DaysAndSlotsResponseDto {
  date: Date;
  timeframes: HourFrame[];
}
