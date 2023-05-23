import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    //el 10 significa que el valor es decimal
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      //BadRequestException es un error de NestJS que nos permite retornar un error 400
      throw new BadRequestException(
        `Validation failed. "${value}" is not an integer.`,
      );
    }
    return value;
  }
}
