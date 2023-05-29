import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  //imports significa que se importa un modulo
  imports: [ProductsModule, UsersModule],
  //controllers significa que se importa un controlador
  controllers: [AppController],
  //providers significa que se importa un servicio
  providers: [AppService],
  //exports significa que se exporta un servicio (ver como un modulo se puede interconectar con otro)
  // exports: [AppService],
})
export class AppModule {}
