export class UserLeadEntity {
  id?: number;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(userDataMarketingEntity: UserLeadEntity) {
    this.id = userDataMarketingEntity.id;
    this.email = userDataMarketingEntity.email;
    this.name = userDataMarketingEntity.name;
    this.createdAt = userDataMarketingEntity.createdAt;
    this.updatedAt = userDataMarketingEntity.updatedAt;
  }
}
