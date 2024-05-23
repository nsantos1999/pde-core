export interface FindAppointmentsDtoInterface {
  doctorId?: number;
  date: {
    start: Date | undefined;
    end: Date | undefined;
  };
}
