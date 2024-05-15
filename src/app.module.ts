import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://stratsrvyt:wJHOW6OmvENfQVUp@nest.0fjvayk.mongodb.net/Task"),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
