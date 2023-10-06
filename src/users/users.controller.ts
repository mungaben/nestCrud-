import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './dto/entities/user.entities';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Get,
  NotAcceptableException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
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
  @ApiQuery({ name: 'name', required: false })
  @ApiNotFoundResponse({ description: 'No users found' })
  @Get()
  getUsers(@Query('name') name?: string): User[] {
    // hadling errors
    const users = this.usersService.findAll(name);
    if (!users.length) {
      throw new NotAcceptableException('No users found');
    }
    return users;
  }
  //   get users by id
  @ApiCreatedResponse({ type: User })
  @ApiNotFoundResponse({ description: 'User not found' })
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    // hadling errors
    const user = this.usersService.findById(Number(id));
    if (!user) {
      throw new NotAcceptableException('User not found');
    }
    return user;
  }
  //   create users
  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.create(body);
  }
}
