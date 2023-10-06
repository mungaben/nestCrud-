import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { User } from './dto/entities/user.entities';

@Injectable()
export class UsersService {
  // simulate fake db
  private users: any[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'mungaben2@21@gmail.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'mungaben2@',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  // finfd user by iid
  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }
  //   create users
  create(user: CreateUserDto): User {
    const newUser = {
      id: Date.now(),
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
}
