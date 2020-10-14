import { Body, Controller, Post } from '@nestjs/common';

import { LoginUserDto } from 'dto';
import { ERouteName } from 'enums';
import { DtoValidationPipe } from 'pipes';


@Controller(ERouteName.LOGIN)
export class LoginController {
  @Post()
  login(@Body(new DtoValidationPipe()) body: LoginUserDto): LoginUserDto {
    return body;
  }
}
