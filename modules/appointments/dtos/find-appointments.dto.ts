export interface FindAppintmentsDtoInterface {
  doctorId?: number;
  date: {
    start: Date | undefined;
    end: Date | undefined;
  };
}
