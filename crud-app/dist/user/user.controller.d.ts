import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findUser(id: number): any;
    findAllUser(): any;
    createUser(CreateUserDto: CreateUserDto): any;
    updateUser(id: number, UpdateUserDto: UpdateUserDto): string;
    deleteUser(id: number): string;
}
