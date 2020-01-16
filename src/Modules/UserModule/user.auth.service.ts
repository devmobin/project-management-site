import { Injectable } from '@nestjs/common';
import { SignupDTO } from '../Shared/dto/signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './db/user.entity';
import { UserRepository } from './db/user.repository';

@Injectable()
export class UserAuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  async registerUser(signupDTO: SignupDTO): Promise<string> {
    const _user = new User();

    Object.keys(signupDTO).forEach(key => (_user[key] = signupDTO[key]));

    await this.userRepository.save(_user);

    return `Now you can login with email: '${_user.email}'`;
  }
}
