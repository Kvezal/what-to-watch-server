import { IsEmail, IsString, MinLength } from 'class-validator';

import {dtoParams} from "common";


const {password} = dtoParams.user;

export class LoginUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(password.MIN_LENGTH)
  password: string;
}
