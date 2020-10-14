import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';


@Injectable()
export class DtoValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const {metatype} = metadata;
    if (!metatype || !this._toValidate(metatype)) {
      return value
    }
    const object = plainToClass(metatype, value);
    const error = await validate(object);
    if (error.length > 0) {
      throw new BadRequestException(`Validation failed`);
    }
    return value;
  }

  private _toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
