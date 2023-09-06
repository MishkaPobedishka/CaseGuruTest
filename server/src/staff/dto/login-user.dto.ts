import { IsEmail, MinLength } from 'class-validator';

export class loginUserDTO {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
