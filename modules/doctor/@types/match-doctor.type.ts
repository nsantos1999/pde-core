import { DoctorType } from './doctor.type';

export interface MatchDoctorType extends DoctorType {
  compatibilityPercentage: number;
}
