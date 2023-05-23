import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // los decoradores son funciones que se ejecutan antes de que se ejecute la funcion y nos ayuda a modificar el comportamiento de la funcion
  getHello(): string {
    return 'this.appService.getHello()';
  }
  @Get('nueva-ruta')
  //el decorador Get nos permite definir una ruta no importa si no tiene un / al inicio o si tiene un / al final
  getHello2(): string {
    return 'papa';
  }
}
