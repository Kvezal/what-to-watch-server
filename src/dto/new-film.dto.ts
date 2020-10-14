import {
  IsDateString,
  IsHexColor,
  IsInt,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import {dtoParams} from "common";


const {description, source, title} = dtoParams.film;

export class NewFilmDto {
  @IsString()
  @MinLength(title.MIN_LENGTH)
  @MaxLength(title.MAX_LENGTH)
  title: string;

  @IsString()
  @MinLength(source.MIN_LENGTH)
  @MaxLength(source.MAX_LENGTH)
  posterImage: string;

  @IsString()
  @MinLength(source.MIN_LENGTH)
  @MaxLength(source.MAX_LENGTH)
  previewImage: string;

  @IsString()
  @MinLength(source.MIN_LENGTH)
  @MaxLength(source.MAX_LENGTH)
  backgroundImage: string;

  @IsString()
  @IsHexColor()
  backgroundColor: string;

  @IsString()
  @MinLength(source.MIN_LENGTH)
  @MaxLength(source.MAX_LENGTH)
  video: string;

  @IsString()
  @MinLength(source.MIN_LENGTH)
  @MaxLength(source.MAX_LENGTH)
  previewVideo: string;

  @IsString()
  @MinLength(description.MIN_LENGTH)
  @MaxLength(description.MAX_LENGTH)
  description: string;

  @IsInt()
  @IsPositive()
  runtime: number;

  @IsDateString()
  release: string;
}
