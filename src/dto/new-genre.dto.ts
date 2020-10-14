import { IsString, Length } from 'class-validator';

import {dtoParams} from "common";


const {title} = dtoParams.genre;

export class NewGenreDto {
  @IsString()
  @Length(title.MIN_LENGTH, title.MAX_LENGTH)
  title: string;
}
