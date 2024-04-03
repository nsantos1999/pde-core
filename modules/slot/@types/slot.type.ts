import { HourFrame } from '../../../global/@types/schedule.types';
import { AppointmentType } from '../../appointments/@types/appointment';

export interface SlotType {
  slot_id: number;

  date: Date;

  appointment_id: AppointmentType;

  timeframe: HourFrame;

  is_booked: boolean;
}
