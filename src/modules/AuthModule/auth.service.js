class AuthService {
  constructor() {}

  generateSession = async (user, req) => {
    req.session.user = user;
    req.session.isLogin = true;

    await req.session.save(e => {
      if (e) {
        throw new Error('Server Error');
      }
    });
    return true;
  };
}

module.exports = AuthService;
