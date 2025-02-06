import {
  FrequencyCode,
  FrequencyWeekRepresent,
} from "../../../global/@types/schedule.types";
import { DateUtils } from "../../../global/utils/date.utils";

export class GetClosestRecurrenceDateUtils {
  static execute(
    startDate: Date,
    weekDay: number, // 0 (Domingo) - 6 (Sábado)
    frequency: FrequencyCode,
    referenceDate: Date = new Date()
  ): Date {
    let recurrenceDate = new Date(startDate);

    // Ajusta a data inicial para cair no primeiro dia correto da semana
    while (recurrenceDate.getDay() !== weekDay) {
      recurrenceDate.setDate(recurrenceDate.getDate() + 1);
    }

    // Calcula os passos semanais
    const step = FrequencyWeekRepresent[frequency];

    // Itera até encontrar a data mais próxima e menor ou igual à data de referência
    let closestDate = recurrenceDate;
    while (
      DateUtils.isBefore(closestDate, referenceDate) ||
      DateUtils.isSameDay(closestDate, referenceDate)
    ) {
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
