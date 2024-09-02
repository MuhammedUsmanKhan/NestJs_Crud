import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  createUser(CreateUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: CreateUserDto,
    });
  }

  updateUser(id: number, UpdateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: {
        id: id,
      },
      data: {
        email: UpdateUserDto.email,
        name: UpdateUserDto.name,
      },
    });
  }
  deleteUser(id: number) {
    return this.prismaService.user.delete({
      where: {
        id: id,
      },
    });
  }

  findUser(id: number) {
    return this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });
  }
  findAllUser() {
    return this.prismaService.user.findMany();
  }
}
