import { Module } from '@nestjs/common';
import { FizzBuzzController } from './api/fizzBuzzController';
import { FizzBuzzService } from './application/fizz-buzz.service';

@Module({
  imports: [],
  controllers: [FizzBuzzController],
  providers: [FizzBuzzService],
})
export class FizzBuzzModule {}
