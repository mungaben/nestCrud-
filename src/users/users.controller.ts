import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './dto/entities/user.entities';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  // controller is layer 1 of 3

  @ApiCreatedResponse({
    type: User,
    isArray: true,
    description: 'get all users',
  })
  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }
  //   get users by id
  @ApiCreatedResponse({ type: User })
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.findById(Number(id));
  }
  //   create users
  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.create(body);
  }
}
