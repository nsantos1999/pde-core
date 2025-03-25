export class PaymentCustomerEntity {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobilePhone: string;
  readonly country: string;
  readonly cpfCnpj: string;
  readonly personType: 'FISICA' | 'JURIDICA';

  constructor(PaymentCustomerRow: PaymentCustomerEntity) {
    this.id = PaymentCustomerRow.id;
    this.name = PaymentCustomerRow.name;
    this.email = PaymentCustomerRow.email;
    this.mobilePhone = PaymentCustomerRow.mobilePhone;
    this.country = PaymentCustomerRow.country;
    this.cpfCnpj = PaymentCustomerRow.cpfCnpj;
    this.personType = PaymentCustomerRow.personType;
  }
}
