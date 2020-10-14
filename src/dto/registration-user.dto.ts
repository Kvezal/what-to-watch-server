import { IsEmail, IsOptional, IsString, Length, Matches, MaxLength, MinLength } from 'class-validator';

import { dtoParams } from 'common';


const { firstname, lastname, avatar, password } = dtoParams.user;

export class RegistrationUserDto {
  @IsString()
  @Length(firstname.MIN_LENGTH, firstname.MAX_LENGTH)
  firstname: string;

  @IsString()
  @Length(lastname.MIN_LENGTH, lastname.MAX_LENGTH)
  lastname: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Matches(/.(jpg|png)$/)
  @MaxLength(avatar.MAX_LENGTH)
  avatar?: string;

  @IsString()
  @MinLength(password.MIN_LENGTH)
  password: string;
}
