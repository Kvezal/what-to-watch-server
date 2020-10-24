import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { LoginUserDto } from 'dto';
import { ERouteName } from 'enums';


@Controller(ERouteName.LOGIN)
export class LoginController {
  @Post()
  login(@Body(ValidationPipe) body: LoginUserDto): LoginUserDto {
    return body;
  }
}
