import { Weekday, TimeAvailability } from '../@types/schedule.types';

export const timeAvailabilityDefaultValues: TimeAvailability = {
  [Weekday.SUNDAY]: {
    is_active: false,
    label: 'Domingo',
    timeframes: [],
  },
  [Weekday.MONDAY]: {
    is_active: false,
    label: 'Segunda',
    timeframes: [],
  },
  [Weekday.TUESDAY]: {
    is_active: false,
    label: 'Terça',
    timeframes: [],
  },
  [Weekday.WEDNESDAY]: {
    is_active: false,
    label: 'Quarta',
    timeframes: [],
  },
  [Weekday.THURSDAY]: {
    is_active: false,
    label: 'Quinta',
    timeframes: [],
  },
  [Weekday.FRIDAY]: {
    is_active: false,
    label: 'Sexta',
    timeframes: [],
  },
  [Weekday.SATURDAY]: {
    is_active: false,
    label: 'Sabado',
    timeframes: [],
  },
};
