import { HourFrame } from 'src/shared/libs/pde-core/global/@types/schedule.types';

export class DaysAndSlotsResponseDto {
  date: Date;
  timeframes: HourFrame[];
}
