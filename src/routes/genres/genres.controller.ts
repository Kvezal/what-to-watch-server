import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { NewGenreDto } from 'dto';
import { ERouteName } from 'enums';


@Controller(ERouteName.GENRES)
export class GenresController {
  @Post()
  create(@Body(ValidationPipe) body: NewGenreDto): NewGenreDto {
    return body;
  }
}
