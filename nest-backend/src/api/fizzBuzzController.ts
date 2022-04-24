import { Controller, Get, Param } from '@nestjs/common';
import { FizzBuzzService } from '../application/fizz-buzz.service';

@Controller()
export class FizzBuzzController {
  constructor(private readonly fizzBuzzService: FizzBuzzService) {}

  @Get('/single/:number')
  getSingleFizzBuzzNumber(@Param('number') number: number): string {
    return this.fizzBuzzService.singleFizzBuzz(number);
  }

  @Get('/range/:inclusiveEnd')
  getAllFizzBuzzNumbersTo(
    @Param('inclusiveEnd') inclusiveEnd: number,
  ): string[] {
    return this.fizzBuzzService.allFizzBuzzTo(inclusiveEnd);
  }
}
