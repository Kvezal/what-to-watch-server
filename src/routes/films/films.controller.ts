import { Body, Controller, Post, Put } from '@nestjs/common';

import { NewFilmDto, PromoFilmStateDto } from 'dto';
import { ERouteName } from 'enums';
import { DtoValidationPipe } from 'pipes';


@Controller(ERouteName.FILMS)
export class FilmsController {
  @Post()
  create(@Body(new DtoValidationPipe()) body: NewFilmDto): NewFilmDto {
    return body;
  }

  @Put(ERouteName.PROMO)
  change(@Body(new DtoValidationPipe()) body: PromoFilmStateDto): PromoFilmStateDto {
    return body;
  }
}
