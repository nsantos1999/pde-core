import { AppointmentType } from "../@types/appointment";

export class GetClosestAppointmentUtils {
  static execute(
    appointments: AppointmentType[],
    targetDate: Date,
    appointmentIdToEdit?: number
  ): AppointmentType | null {
    const closestAppointment = appointments
      .filter(
        (appointment) => appointment.appointment_id !== appointmentIdToEdit
      )
      .reduce<{
        appointment: AppointmentType;
        diff: number;
      } | null>((closest, appointmentToCheck) => {
        const currentDate = new Date(appointmentToCheck.schedule_day);

        // Calcule a diferença em milissegundos
        const currentDiff = Math.abs(
          currentDate.getTime() - new Date(targetDate).getTime()
        );

        // Compare com o menor intervalo encontrado até agora
        if (!closest || currentDiff < closest.diff) {
          return { appointment: appointmentToCheck, diff: currentDiff };
        }

        return closest;
      }, null);

    return closestAppointment?.appointment ?? null;
  }
}
