import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { NewPersonDto } from 'dto';
import { ERouteName } from 'enums';


@Controller(ERouteName.PEOPLE)
export class PeopleController {
  @Post()
  create(@Body(ValidationPipe) body: NewPersonDto): NewPersonDto {
    return body;
  }
}
