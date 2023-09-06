import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const CLIENT_URL = 'http://localhost:3000';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: CLIENT_URL,
    credentials: true,
  });
  app.setGlobalPrefix('/api');
  await app.listen(5500);
}
bootstrap();
