import { PacientType } from '../@types/pacient.type';

export type CreditType = 'credit' | 'debit';

export class PacientCreditEntity {
  id: number;
  pacient: PacientType;
  amount: number;
  type: CreditType;
  externalId?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(pacientCreditEntity: PacientCreditEntity) {
    this.id = pacientCreditEntity.id;
    this.pacient = pacientCreditEntity.pacient;
    this.amount = pacientCreditEntity.amount;
    this.type = pacientCreditEntity.type;
    this.externalId = pacientCreditEntity.externalId;
    this.createdAt = pacientCreditEntity.createdAt;
    this.updatedAt = pacientCreditEntity.updatedAt;
  }
}
