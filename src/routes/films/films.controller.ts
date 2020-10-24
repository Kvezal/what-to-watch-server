import { Body, Controller, Post, Put, ValidationPipe } from '@nestjs/common';

import { NewFilmDto, PromoFilmStateDto } from 'dto';
import { ERouteName } from 'enums';


@Controller(ERouteName.FILMS)
export class FilmsController {
  @Post()
  create(@Body(ValidationPipe) body: NewFilmDto): NewFilmDto {
    return body;
  }

  @Put(ERouteName.PROMO)
  change(@Body(ValidationPipe) body: PromoFilmStateDto): PromoFilmStateDto {
    return body;
  }
}
