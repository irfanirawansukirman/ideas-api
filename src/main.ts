import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const newPort = process.env.PORT || 3003;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(newPort);

  Logger.log(`Server running on http://localhost:${newPort}`, 'Bootstrap');
}
bootstrap();
