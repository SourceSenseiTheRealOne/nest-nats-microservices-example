import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
// import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsMicroserviceController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
  @EventPattern('createPayment')
  createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    console.log('createPayment', createPaymentDto);
    this.natsClient.emit('paymentCreated', createPaymentDto);
    // return createPaymentDto;
  }
}
