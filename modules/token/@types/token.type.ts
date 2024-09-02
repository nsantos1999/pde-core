import { UserType } from '../../user/@types/user.type';
import { TokenStatusEnum } from '../constants/enums/token-status.enum';
import { TokenTypeEnum } from '../constants/enums/token-type.enum';

export interface Token {
  id: number;
  code: string;
  user: UserType;
  type: TokenTypeEnum;
  status: TokenStatusEnum;
  expireAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
