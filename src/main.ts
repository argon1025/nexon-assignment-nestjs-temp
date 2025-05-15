import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ConfigService
  const configService = app.get(ConfigService);
  const SERVICE_NAME = configService.getOrThrow<string>('SERVICE_NAME');
  const PORT = configService.getOrThrow<string>('PORT');
  const ENV = configService.getOrThrow<string>('NODE_ENV');

  await app.listen(PORT);
  Logger.log(`${SERVICE_NAME} is running on port ${PORT} in ${ENV}`);
}
bootstrap();
