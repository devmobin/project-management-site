import { Injectable } from '@nestjs/common';
import { SignupDTO } from '../Shared/dto/signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './db/user.entity';
import { UserRepository } from './db/user.repository';
import { LoginDTO } from '../Shared/dto/login.dto';

@Injectable()
export class UserAuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  async registerUser(signupDTO: SignupDTO): Promise<User> {
    return await this.userRepository.registerUser(signupDTO);
  }

  async validateUserCredentials(loginDTO: LoginDTO): Promise<boolean> {
    return await this.userRepository.validateUserCredentials(loginDTO);
  }
}
