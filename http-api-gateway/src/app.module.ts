import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';
// import { NatsClientModule } from './nats-client/nats-client.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [UsersModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
