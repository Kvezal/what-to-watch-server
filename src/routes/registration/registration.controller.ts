import { Body, Controller, Post } from '@nestjs/common';

import { RegistrationUserDto } from 'dto';
import { ERouteName } from 'enums';
import { DtoValidationPipe } from 'pipes';


@Controller(ERouteName.REGISTRATION)
export class RegistrationController {
  @Post()
  create(@Body(new DtoValidationPipe()) body: RegistrationUserDto): RegistrationUserDto {
    return body;
  }
}
