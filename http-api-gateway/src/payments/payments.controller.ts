import { Body, Controller, Inject, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDto } from './dto/CreatePayment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    this.natsClient.emit('createPayment', createPaymentDto);
    return createPaymentDto;
  }
}
