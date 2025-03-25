import { SubscriptionStatusEnum } from '../constants/enums/subscription-status.enum';
import { DateUtils } from 'src/shared/libs/pde-core/global/utils/date.utils';
import { SubscriptionCycleEnum } from '../constants/enums/subscription-cycle.enum';

export class SubscriptionEntity {
  readonly id: string;
  readonly value: number;
  readonly customerReference: string;
  readonly cycle: SubscriptionCycleEnum;
  readonly status: SubscriptionStatusEnum;
  readonly nextDueDate: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(subscriptionEntity: Omit<SubscriptionEntity, 'isLate'>) {
    this.id = subscriptionEntity.id;
    this.value = subscriptionEntity.value;
    this.customerReference = subscriptionEntity.customerReference;
    this.cycle = subscriptionEntity.cycle;
    this.status = subscriptionEntity.status;
    this.nextDueDate = subscriptionEntity.nextDueDate;
    this.createdAt = subscriptionEntity.createdAt;
    this.updatedAt = subscriptionEntity.updatedAt;
  }

  isLate(): boolean {
    return DateUtils.isBefore(this.nextDueDate, new Date());
  }
}
