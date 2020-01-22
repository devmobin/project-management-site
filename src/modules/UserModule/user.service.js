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

  loginUser = async loginDTO => {
    try {
      const user = await User.loginEmailPassword(
        loginDTO.email,
        loginDTO.password
      );
      return user;
    } catch (e) {
      throw new Error('Unable to login');
    }
  };

  getUserInfo = async id => {
    try {
      const user = await User.findById(id);
      return user;
    } catch (e) {
      throw new Error('database error');
    }
  };

  editProfile = async editUserProfileDTO => {
    try {
      const user = await User.findOne({ email: editUserProfileDTO.email });

      if (!user) {
        throw new Error('User is not exists');
      }

      Object.keys(editUserProfileDTO).forEach(key => {
        user[key] = editUserProfileDTO[key];
      });

      return await user.save();
    } catch (e) {
      throw new Error(e.message);
    }
  };
}

module.exports = UserService;
