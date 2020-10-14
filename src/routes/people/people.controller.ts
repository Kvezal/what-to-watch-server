import { Body, Controller, Post } from '@nestjs/common';

import { NewPersonDto } from 'dto';
import { DtoValidationPipe } from 'pipes';
import { ERouteName } from 'enums';


@Controller(ERouteName.PEOPLE)
export class PeopleController {
  @Post()
  create(@Body(new DtoValidationPipe()) body: NewPersonDto): NewPersonDto {
    return body;
  }
}
