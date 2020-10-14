import { IsBoolean, IsInt, IsPositive } from 'class-validator';


export class PromoFilmStateDto {
  @IsInt()
  @IsPositive()
  filmId: number;

  @IsBoolean()
  isPromo: boolean;
}
