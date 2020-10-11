import { Module } from '@nestjs/common';
import { PromoFilmController } from './promo-film.controller';
import { PromoFilmService } from './promo-film.service';

@Module({
  controllers: [PromoFilmController],
  providers: [PromoFilmService]
})
export class PromoFilmModule {}
