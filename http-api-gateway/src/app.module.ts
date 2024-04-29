import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';
// import { NatsClientModule } from './nats-client/nats-client.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
