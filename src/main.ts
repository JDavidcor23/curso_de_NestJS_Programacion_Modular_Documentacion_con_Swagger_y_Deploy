import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //TRATAR DE ACTIVAR SOLO UNO DE LOS DOS
      whitelist: true, //solo se van a pasar los valores que esten definidos en el DTO
      forbidNonWhitelisted: true, //si se envia un valor que no esta definido en el DTO, se retorna un error
    }),
  );
  await app.listen(3000);
}
bootstrap();
