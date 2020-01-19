import { IsEmail, IsString, Length } from "class-validator";

export class SignupDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @Length(5)
  password: string;
}