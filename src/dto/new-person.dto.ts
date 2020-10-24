import { IsInt, IsString, Length } from 'class-validator';

import {dtoParams} from "common";


const {firstname, lastname} = dtoParams.person;

export class NewPersonDto {
  @IsString()
  @Length(firstname.MIN_LENGTH, firstname.MAX_LENGTH)
  firstname: string;

  @IsString()
  @Length(lastname.MIN_LENGTH, lastname.MAX_LENGTH)
  lastname: string;

  @IsInt()
  type: number;
}
