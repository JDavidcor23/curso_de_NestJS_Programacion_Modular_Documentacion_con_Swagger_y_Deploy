import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  // ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';

import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dtos';

// el decorador Controller nos permite definir una ruta y ya no es necesario definir la ruta en cada decorador
@Controller('products')
export class ProductsController {
  //inyeccion de dependencias
  constructor(private productsService: ProductsService) {}

  @Get('filter')
  getFilter() {
    // las rutas que no sean dinamicas (que no tengan parametros) deben ir antes de las rutas dinamicas
    return { message: 'filter' };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED) //cambiar el codigo de respuesta
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }
  //parametros tipo query
  @Get()
  getProducts(
    @Query('limit') limit: number = 20,
    @Query('offset') offset: number = 1,
  ) {
    return this.productsService.findAll();
  }
  //metodo post
  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  //metodo put
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }
  //metodo delete
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
