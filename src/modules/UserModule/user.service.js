const User = require('./db/user.schema');

class UserService {
  constructor() {}

  registerUser = async signupDTO => {
    const user = new User();

    Object.keys(signupDTO).forEach(key => {
      user[key] = signupDTO[key];
    });

    try {
      await user.save();
    } catch (e) {
      if (e.code === 11000) {
        throw new Error('You already have an account');
      }
      throw new Error('database error');
    }

    return user;
  };
}

module.exports = UserService;
