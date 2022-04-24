import { Injectable } from '@nestjs/common';
import { fizzBuzz, fizzBuzzGenerator } from '../domain/fizzbuzz/fizzBuzz';

@Injectable()
export class FizzBuzzService {
  singleFizzBuzz(number: number): string {
    return fizzBuzz(number);
  }

  allFizzBuzzTo(inclusiveEnd: number): string[] {
    return fizzBuzzGenerator(inclusiveEnd);
  }
}
