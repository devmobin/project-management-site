import { IsEmail, Length } from "class-validator";

export class LoginDTO {
  @IsEmail()
  email: string;

  @Length(5)
  password: string;
}