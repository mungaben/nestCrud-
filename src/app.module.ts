import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UsersModule, TodosModule],
  // contoller with a service layer
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
