import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { RegistrationUserDto } from 'dto';
import { ERouteName } from 'enums';


@Controller(ERouteName.REGISTRATION)
export class RegistrationController {
  @Post()
  create(@Body(ValidationPipe) body: RegistrationUserDto): RegistrationUserDto {
    return body;
  }
}
