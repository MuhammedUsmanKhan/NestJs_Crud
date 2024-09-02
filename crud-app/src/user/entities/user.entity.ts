import { User as UserModal } from '@prisma/client';

export class UserEntity implements UserModal {
  id: number;
  email: string;
  name: string;
}
