import { Injectable } from '@nestjs/common';
import { UserAuthService } from '../UserModule/user.auth.service';

@Injectable()
export class AuthService {
  constructor(private readonly userAuthService: UserAuthService) {}
}
