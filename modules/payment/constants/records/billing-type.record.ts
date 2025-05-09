import { BillingTypeEnum } from '../enums/billing-type.enum';

interface BillingTypeRecordProps {
  title: string;
}

export const BillingTypeRecord: Record<BillingTypeEnum, BillingTypeRecordProps> = {
  [BillingTypeEnum.BANK_SLIP]: {
    title: 'Boleto',
  },
  [BillingTypeEnum.CREDIT_CARD]: {
    title: 'Cartão de Crédito',
  },
  [BillingTypeEnum.PIX]: {
    title: 'PIX',
  },
};
