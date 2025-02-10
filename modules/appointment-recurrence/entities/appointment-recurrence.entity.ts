import { DoctorType } from '../../doctor/@types/doctor.type';
import { PacientType } from '../../pacient/@types/pacient.type';
// eslint-disable-next-line import/no-cycle
import { AppointmentType } from '../../appointments/@types/appointment';
import { RecurrenceFrequencyCode } from '../../../global/@types/schedule.types';

export class AppointmentRecurrenceEntity {
  id: number;
  title: string;
  description?: string;
  weekDay: number;
  startDate: Date;
  timeframe: string;
  frequency: RecurrenceFrequencyCode;
  doctor: DoctorType;
  pacient: PacientType;
  appointments: AppointmentType[];
  createdAt: Date;
  updatedAt: Date;

  constructor(raw: Omit<AppointmentRecurrenceEntity, 'isAvailable' | 'hasAppointments'>) {
    this.id = raw.id ?? -1; // Usando o operador nullish coalescing para um valor padrão
    this.title = raw.title;
    this.description = raw.description;
    this.weekDay = raw.weekDay;
    this.startDate = raw.startDate;
    this.timeframe = raw.timeframe;
    this.frequency = raw.frequency;
    this.doctor = raw.doctor;
    this.pacient = raw.pacient;
    this.appointments = raw.appointments;
    this.createdAt = raw.createdAt;
    this.updatedAt = raw.updatedAt;
  }

  isAvailable() {
    return this.doctor?.user.is_active && this.pacient?.user.is_active;
  }

  hasAppointments() {
    return this.appointments?.length > 0;
  }
}
