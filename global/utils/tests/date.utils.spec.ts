import { DateUtils } from '../date.utils';

describe('DateUtils', () => {
  describe('getNextWeekdayDate', () => {
    it('should return next weekday date', () => {
      const date = new Date(2025, 2, 18);
      const targetWeekday = 1; // Monday
      const nextWeekdayDate = DateUtils.getNextWeekdayDate(targetWeekday, date);
      expect(nextWeekdayDate).toEqual(new Date(2025, 2, 24));
    });

    it('should return provided date if current date is exactly weekday provided', () => {
      const date = new Date(2025, 2, 17);
      const targetWeekday = 1; // Monday
      const nextWeekdayDate = DateUtils.getNextWeekdayDate(targetWeekday, date);
      expect(nextWeekdayDate).toEqual(new Date(2025, 2, 17));
    });
  });
});
