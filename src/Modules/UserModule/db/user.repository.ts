import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { SignupDTO } from 'src/Modules/Shared/dto/signup.dto';
import { hash } from 'bcryptjs';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  private async hashPassword(password: string) {
    return await hash(password, 8);
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
