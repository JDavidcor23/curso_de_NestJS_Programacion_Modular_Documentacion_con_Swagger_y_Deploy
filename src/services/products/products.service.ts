import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { Product } from '../../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

//Injectable es un decorador que nos permite inyectar dependencias a una clase
@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripcion 1',
      price: 122,
      stock: 12,
      image: 'https://i.imgur.com/U4iGx1j.jpeg',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      //NotFoundException es un error de NestJS que nos permite retornar un error 404
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...this.products[index],
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
