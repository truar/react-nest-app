import { NestFactory } from '@nestjs/core';
import { FizzBuzzModule } from './fizzBuzzModule';

async function bootstrap() {
  const app = await NestFactory.create(FizzBuzzModule);
  await app.listen(8080);
}
bootstrap();
