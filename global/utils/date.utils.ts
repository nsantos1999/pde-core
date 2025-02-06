import {
  addDays,
  addHours,
  addWeeks,
  isBefore,
  isFuture,
  isSameDay,
} from "date-fns";

export class DateUtils {
  static addDays(date: Date, amount: number): Date {
    return addDays(date, amount);
  }
  static addWeeks(date: Date, amount: number): Date {
    return addWeeks(date, amount);
  }
  static addHours(date: Date, amount: number): Date {
    return addHours(date, amount);
  }
  static isFuture(date: Date): boolean {
    return isFuture(new Date(date));
  }
  static isBefore(dateLeft: Date, dateRight: Date): boolean {
    return isBefore(new Date(dateLeft), new Date(dateRight));
  }
  static getWeekDay(date: Date): number {
    return new Date(date).getDay();
  }
  static isSameDay(dateLeft: Date, dateRight: Date): boolean {
    return isSameDay(new Date(dateLeft), new Date(dateRight));
  }
}
