import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { PromoFilmModule } from './promo-film/promo-film.module';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService],
  imports: [PromoFilmModule]
})
export class FilmsModule {}
