import { Injectable } from '@nestjs/common';
import { SignupDTO } from '../Shared/dto/signup.dto';

@Injectable()
export class UserAuthService {
  registerUser(signupDTO: SignupDTO): void {}
}
