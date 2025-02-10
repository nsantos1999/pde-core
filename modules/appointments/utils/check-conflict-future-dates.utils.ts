import { DateUtils } from '../../../global/utils/date.utils';
import { FrequencyCode, FrequencyWeekRepresent } from '../../../global/@types/schedule.types';

interface DateToCompareWithRoundsItem {
  date: Date;
  frequency: FrequencyCode;
}

export class CheckConflictFutureDatesUtils {
  private static readonly ROUND_TO_COMPARE_DATES = 5;

  static execute(
    dateToCompareA: DateToCompareWithRoundsItem,
    dateToCompareB: DateToCompareWithRoundsItem
  ): boolean {
    const getDatesWithRounds = (dateToCompareItem: DateToCompareWithRoundsItem) => {
      const dates: Date[] = [dateToCompareItem.date];

      while (dates.length < this.ROUND_TO_COMPARE_DATES) {
        const increaseDate = DateUtils.addWeeks(
          dates[dates.length - 1],
          FrequencyWeekRepresent[dateToCompareItem.frequency]
        );

        dates.push(increaseDate);
      }

      return dates;
    };

    const datesA = getDatesWithRounds(dateToCompareA);
    const datesB = getDatesWithRounds(dateToCompareB);

    let hasConflict = false;

    datesA.forEach((dateA) => {
      if (hasConflict) {
        return;
      }
      datesB.forEach((dateB) => {
        if (hasConflict) {
          return;
        }
        if (DateUtils.isSameDay(dateA, dateB)) {
          hasConflict = true;
        }
      });
    });

    return hasConflict;
  }
}
