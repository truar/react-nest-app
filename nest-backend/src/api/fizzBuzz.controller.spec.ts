import { Test, TestingModule } from '@nestjs/testing';
import { FizzBuzzController } from './fizzBuzzController';
import { FizzBuzzService } from '../application/fizz-buzz.service';

describe('AppController', () => {
  let appController: FizzBuzzController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FizzBuzzController],
      providers: [FizzBuzzService],
    }).compile();

    appController = app.get<FizzBuzzController>(FizzBuzzController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
