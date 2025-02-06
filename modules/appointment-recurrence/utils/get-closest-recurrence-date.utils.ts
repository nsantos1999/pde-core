import {
  FrequencyCode,
  FrequencyWeekRepresent,
} from "../../../global/@types/schedule.types";
import { DateUtils } from "../../../global/utils/date.utils";

export class GetClosestRecurrenceDateUtils {
  static execute(
    startDate: Date,
    frequency: FrequencyCode,
    referenceDate: Date = new Date()
  ): Date {
    let recurrenceDate = new Date(startDate);

    // Calcula os passos semanais
    const step = FrequencyWeekRepresent[frequency];

    // Itera até encontrar a data mais próxima e menor ou igual à data de referência
    let closestDate = recurrenceDate;
    while (DateUtils.diffInWeeks(closestDate, referenceDate) > step) {
      recurrenceDate = DateUtils.addWeeks(closestDate, step);
      if (
        DateUtils.isBefore(recurrenceDate, referenceDate) ||
        DateUtils.isSameDay(recurrenceDate, referenceDate)
      ) {
        closestDate = recurrenceDate;
      } else {
        break;
      }
    }

    return closestDate;
  }
}
