import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // layer 3 of 3 connect to db  from controller to service layer to data access layer
  getHello(): string {
    return 'Hello World!';
  }
}
