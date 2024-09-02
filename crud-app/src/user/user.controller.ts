import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get')
  findUser(id: number) {
    return this.userService.findUser(id);
  }

  @Get('')
  findAllUser() {
    return this.userService.findAllUser();
  }

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.createUser(CreateUserDto);
  }

  @Put()
  updateUser(id: number, @Body() UpdateUserDto: UpdateUserDto): string {
    this.userService.updateUser(id, UpdateUserDto);
    return 'User has been succesfully Updated';
  }


  @Delete('update')
  deleteUser(id: number): string {
    this.userService.deleteUser(id);
    return 'User has been deleted';
  }
}
