import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

const newPort = process.env.PORT || 3003;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(newPort);

  Logger.log(`Server running on http://localhost:${newPort}`, 'Bootstrap');
}
bootstrap();
