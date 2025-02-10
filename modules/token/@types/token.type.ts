import { UserType } from '../../user/@types/user.type';
import { TokenTypeEnum } from '../constants/enums/token-type.enum';
import { TokenStatusEnum } from '../constants/enums/token-status.enum';

export interface Token {
  id: number;
  code: string;
  user: UserType;
  type: TokenTypeEnum;
  status: TokenStatusEnum;
  expireAt: Date;
  usedAt?: Date;
  createdAt: Date;
  updatedAt?: Date;
}
