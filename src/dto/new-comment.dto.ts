import { IsInt, IsPositive, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

import {dtoParams} from "common";


const {text, rating} = dtoParams.comment;

export class NewCommentDto {
  @IsString()
  @MinLength(text.MIN_LENGTH)
  @MaxLength(text.MAX_LENGTH)
  text: string;

  @IsInt()
  @Min(rating.MIN_VALUE)
  @Max(rating.MAX_VALUE)
  rating: number;

  @IsInt()
  @IsPositive()
  filmId: number;
}
