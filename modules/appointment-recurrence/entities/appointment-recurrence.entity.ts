import { RecurrenceFrequencyCode } from '../../../global/@types/schedule.types';
import { AppointmentType } from '../../appointments/@types/appointment';
import { DoctorType } from '../../doctor/@types/doctor.type';
import { PacientType } from '../../pacient/@types/pacient.type';

export class AppointmentRecurrenceEntity {
  id: number;
  title: string;
  description?: string;
  weekDay: number;
  timeframe: string;
  frequency: RecurrenceFrequencyCode;
  doctor: DoctorType;
  pacient: PacientType;
  appointments: AppointmentType[];
  createdAt: Date;
  updatedAt: Date;

  constructor(raw: AppointmentRecurrenceEntity) {
    this.id = raw.id ?? -1; // Usando o operador nullish coalescing para um valor padrão
    this.title = raw.title;
    this.description = raw.description;
    this.weekDay = raw.weekDay;
    this.timeframe = raw.timeframe;
    this.frequency = raw.frequency;
    this.doctor = raw.doctor;
    this.pacient = raw.pacient;
    this.appointments = raw.appointments;
    this.createdAt = raw.createdAt;
    this.updatedAt = raw.updatedAt;
  }
}
