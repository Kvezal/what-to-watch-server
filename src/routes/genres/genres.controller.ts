import { Body, Controller, Post } from '@nestjs/common';

import { NewGenreDto } from 'dto';
import { ERouteName } from 'enums';
import { DtoValidationPipe } from 'pipes';


@Controller(ERouteName.GENRES)
export class GenresController {
  @Post()
  create(@Body(new DtoValidationPipe()) body: NewGenreDto): NewGenreDto {
    return body;
  }
}
