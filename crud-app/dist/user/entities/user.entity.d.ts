import { User as UserModal } from '@prisma/client';
export declare class UserEntity implements UserModal {
    id: number;
    email: string;
    name: string;
}
