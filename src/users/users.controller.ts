import { CreateUserDto } from './dto/create-user.dto';
import { User } from './dto/entities/user.entities';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  // controller is layer 1 of 3
  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }
  //   get users by id
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.findById(Number(id));
  }
  //   create users
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.create(body);
  }
}
