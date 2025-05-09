import { BillingTypeEnum } from '../constants/enums/billing-type.enum';
import { RecurrenceFrequencyCode } from '../../../global/@types/schedule.types';

export interface CreditCardPaymentDto {
  creditCardToken: string;
}

export interface CreateSubscriptionDto {
  value: number;
  customerReference: string;
  cycle: RecurrenceFrequencyCode;
  nextDueDate: Date;
  billingType: BillingTypeEnum;
  creditCardData?: CreditCardPaymentDto;
}
