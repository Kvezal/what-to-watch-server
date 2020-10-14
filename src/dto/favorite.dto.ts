import { IsBoolean, IsInt, IsPositive } from 'class-validator';


export class FavoriteDto {
  @IsBoolean()
  isFavorite: boolean;
}
