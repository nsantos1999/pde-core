import { compareDesc } from 'date-fns';

import { DoctorType } from '../../doctor/@types/doctor.type';
import { DateUtils } from '../../../global/utils/date.utils';
import { PacientType } from '../../pacient/@types/pacient.type';
// eslint-disable-next-line import/no-cycle
import { AppointmentType } from '../../appointments/@types/appointment';
import { RecurrenceFrequencyCode } from '../../../global/@types/schedule.types';
import { SubscriptionEntity } from '../../payment/entities/subscription.entity';

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
  paymentSubscription?: SubscriptionEntity;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    raw: Omit<
      AppointmentRecurrenceEntity,
      | 'isAvailable'
      | 'hasAppointments'
      | 'futureAppointments'
      | 'lastAppointment'
      | 'deactivate'
      | 'activate'
    >
  ) {
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
    this.isActive = raw.isActive;
    this.paymentSubscription = raw.paymentSubscription;
    this.createdAt = raw.createdAt;
    this.updatedAt = raw.updatedAt;
  }

  isAvailable() {
    return this.doctor?.user.is_active && this.pacient?.user.is_active && this.isActive;
  }

  hasAppointments() {
    return this.appointments?.length > 0;
  }

  activate() {
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }

  get futureAppointments() {
    return this.appointments.filter((appointment) =>
      DateUtils.isFuture(new Date(appointment.schedule_day))
    );
  }

  get lastAppointment() {
    if (!this.appointments?.length) return null;

    return this.appointments.slice().sort((a, b) => compareDesc(a.schedule_day, b.schedule_day))[0];
  }
}
