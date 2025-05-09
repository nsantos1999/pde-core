import { UserType } from '../../user/@types/user.type';
import { DateUtils } from '../../../global/utils/date.utils';
import { SubscriptionCycleEnum } from '../constants/enums/subscription-cycle.enum';
import { SubscriptionStatusEnum } from '../constants/enums/subscription-status.enum';

export class SubscriptionEntity {
  readonly id: number;
  readonly value: number;
  readonly customerReference: string;
  readonly externalId: string;
  user: UserType;
  readonly cycle: SubscriptionCycleEnum;
  readonly status: SubscriptionStatusEnum;
  readonly nextDueDate: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(subscriptionEntity: Omit<SubscriptionEntity, 'isLate' | 'setUser'>) {
    this.id = subscriptionEntity.id;
    this.externalId = subscriptionEntity.externalId;
    this.value = subscriptionEntity.value;
    this.customerReference = subscriptionEntity.customerReference;
    this.user = subscriptionEntity.user;
    this.cycle = subscriptionEntity.cycle;
    this.status = subscriptionEntity.status;
    this.nextDueDate = subscriptionEntity.nextDueDate;
    this.createdAt = subscriptionEntity.createdAt;
    this.updatedAt = subscriptionEntity.updatedAt;
  }

  setUser(user: UserType) {
    this.user = user;
  }

  isLate(): boolean {
    return DateUtils.isBefore(this.nextDueDate, new Date());
  }
}
