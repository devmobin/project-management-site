import { Injectable } from '@nestjs/common';
import { SignupDTO } from '../AuthModule/dto/signup.dto';

@Injectable()
export class UserAuthService {
  registerUser(signupDTO: SignupDTO): void {}
}
