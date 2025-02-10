import { Weekday } from '../../@types/schedule.types';

export type WeekdayLookupInterface<T extends string | number | symbol = Weekday> = {
  [key in T]: {
    name: string;
    abbreviatedName: string;
    enabledToWork: boolean;
  };
};

export const WeekdayLookup: WeekdayLookupInterface = {
  [Weekday.SUNDAY]: {
    name: 'Domingo',
    abbreviatedName: 'Dom',
    enabledToWork: false,
  },
  [Weekday.MONDAY]: {
    name: 'Segunda',
    abbreviatedName: 'Seg',
    enabledToWork: true,
  },
  [Weekday.TUESDAY]: {
    name: 'Terça',
    abbreviatedName: 'Ter',
    enabledToWork: true,
  },
  [Weekday.WEDNESDAY]: {
    name: 'Quarta',
    abbreviatedName: 'Qua',
    enabledToWork: true,
  },
  [Weekday.THURSDAY]: {
    name: 'Quinta',
    abbreviatedName: 'Qui',
    enabledToWork: true,
  },
  [Weekday.FRIDAY]: {
    name: 'Sexta',
    abbreviatedName: 'Sex',
    enabledToWork: true,
  },
  [Weekday.SATURDAY]: {
    name: 'Sábado',
    abbreviatedName: 'Sáb',
    enabledToWork: true,
  },
};
