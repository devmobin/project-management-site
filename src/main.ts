import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './Modules/AppModule/app.module';
import { join } from 'path';
import { port } from './Config/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'src', 'Views', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'Views'));
  app.setViewEngine('ejs');

  await app.listen(port);
}
bootstrap();
