export interface Hour {
  name: string;
  code: string;
}

export enum FrequencyCode {
  LOSE = 'loose',
  WEEKLY = 'weekly',
  BIWEEKLY = 'biweekly',
}

export const FrequencyWeekRepresent: Record<FrequencyCode, number> = {
  [FrequencyCode.LOSE]: 0,
  [FrequencyCode.WEEKLY]: 1,
  [FrequencyCode.BIWEEKLY]: 2,
};

export enum RecurrenceFrequencyCode {
  WEEKLY = 'weekly',
  BIWEEKLY = 'biweekly',
}

export const RecurrenceFrequencyLookup: Record<
  RecurrenceFrequencyCode,
  { displayText: string }
> = {
  [RecurrenceFrequencyCode.WEEKLY]: {
    displayText: 'Semanal',
  },
  [RecurrenceFrequencyCode.BIWEEKLY]: {
    displayText: 'Quinzenal',
  },
};

export interface Frequency {
  name: string;
  code: FrequencyCode;
}

export enum Weekday {
  SUNDAY = 'sunday',
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
}

export const WeekdayByWeekdayNumber: Record<number, Weekday> = {
  0: Weekday.SUNDAY,
  1: Weekday.MONDAY,
  2: Weekday.TUESDAY,
  3: Weekday.WEDNESDAY,
  4: Weekday.THURSDAY,
  5: Weekday.FRIDAY,
  6: Weekday.SATURDAY,
};

// export type Weekday =
//   | 'sunday'
//   | 'monday'
//   | 'tuesday'
//   | 'wednesday'
//   | 'thursday'
//   | 'friday'
//   | 'saturday';

export type Month =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december';

export type HourFrame =
  | '00:00'
  | '01:00'
  | '02:00'
  | '03:00'
  | '04:00'
  | '05:00'
  | '06:00'
  | '07:00'
  | '08:00'
  | '09:00'
  | '10:00'
  | '11:00'
  | '12:00'
  | '13:00'
  | '14:00'
  | '15:00'
  | '16:00'
  | '17:00'
  | '18:00'
  | '19:00'
  | '20:00'
  | '21:00'
  | '22:00'
  | '23:00';

interface SelectOption {
  name: string;
  code: string;
}

export type TimeAvailabilityItem = {
  is_active: boolean;
  label: string;
  timeframes: Timeframe[];
};

export type Timeframe = {
  begin_timeframe: SelectOption;
  end_timeframe: SelectOption;
};

export type TimeAvailability = {
  [week_day in Weekday]: TimeAvailabilityItem;
};
