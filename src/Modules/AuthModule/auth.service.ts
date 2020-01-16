import { Injectable } from '@nestjs/common';
import { UserAuthService } from '../UserModule/user.auth.service';
import { SignupDTO } from '../Shared/dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userAuthService: UserAuthService) {}

  async registerUser(signupDTO: SignupDTO) {
    await this.userAuthService.registerUser(signupDTO);
  }
}
