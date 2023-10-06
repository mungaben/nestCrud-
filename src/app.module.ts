import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  // contoller with a service layer
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}