import { Module } from '@nestjs/common';
// import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';

@Module({
  imports: [NatsClientModule],
  controllers: [PaymentsController],
  providers: [],
})
export class PaymentsModule {}
