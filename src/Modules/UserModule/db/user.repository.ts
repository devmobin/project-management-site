import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { SignupDTO } from 'src/Modules/Shared/dto/signup.dto';
import { hash, compare } from 'bcryptjs';
import { LoginDTO } from 'src/Modules/Shared/dto/login.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private async hashPassword(password: string) {
    return await hash(password, 8);
  }

  async validateUserCredentials(loginDTO: LoginDTO) {
    let found: User;

    try {
      found = await this.findOne({ email: loginDTO.email });

      if (found === undefined) {
        throw new Error('Email not exist');
      }
    } catch (e) {
      throw new Error(e.message);
    }

    return await compare(loginDTO.password, found.password);
  }

  async registerUser(signupDTO: SignupDTO): Promise<User> {
    const _user = new User();

    Object.keys(signupDTO).forEach(key => {
      if (key != 'id') {
        _user[key] = signupDTO[key];
      }
    });

    _user.password = await this.hashPassword(_user.password);

    try {
      await _user.save();
    } catch (e) {
      if (e.code == 'ER_DUP_ENTRY') {
        throw new Error('Email is already exists');
      }
    }

    return _user;
  }
}
