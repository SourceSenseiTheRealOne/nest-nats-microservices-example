import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './user.controller';

@Module({
  imports: [],
  controllers: [UsersMicroserviceController],
  providers: [],
})
export class UsersModule {}
