import { Body, Controller, Param, ParseIntPipe, Put } from '@nestjs/common';

import { ERouteName } from 'enums';
import { DtoValidationPipe } from 'pipes';
import { FavoriteDto } from 'dto';


@Controller(ERouteName.FAVORITE)
export class FavoriteController {
  @Put(`:filmId`)
  change(
    @Body(new DtoValidationPipe()) body: FavoriteDto,
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
