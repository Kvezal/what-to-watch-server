import { Body, Controller, Param, ParseIntPipe, Put, ValidationPipe } from '@nestjs/common';

import { ERouteName } from 'enums';
import { FavoriteDto } from 'dto';


@Controller(ERouteName.FAVORITE)
export class FavoriteController {
  @Put(`:filmId`)
  change(
    @Body(ValidationPipe) body: FavoriteDto,
    @Param(`filmId`, ParseIntPipe) filmId: number
  ): {
    body: FavoriteDto,
    filmId: number
  } {
    return {
      body,
      filmId,
    };
  }
}
