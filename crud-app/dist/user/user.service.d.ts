import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createUser(CreateUserDto: CreateUserDto): any;
    updateUser(id: number, UpdateUserDto: UpdateUserDto): any;
    deleteUser(id: number): any;
    findUser(id: number): any;
    findAllUser(): any;
}
