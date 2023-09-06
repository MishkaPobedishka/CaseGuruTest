import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class createUserDTO {
  @IsNotEmpty()
  id: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
