const RenderOptions = require('../../config/render-options');

class AuthController {
  constructor(authService, userService) {
    // AuthService injected by bean factory
    this.authService = authService;
    // UserService injected by bean factory
    this.userService = userService;
  }

  signupUser = async (req, res, next) => {
    let render = new RenderOptions('Join us', 'login');

    if (req.validationError) {
      render.mode = 'signup';
      render.error = req.validationError;
      return res.render('auth', render);
    }

    try {
      await this.userService.registerUser(req.signupDTO);
      render.pageTitle = 'Login';
      render.message = 'Now you can login';
      res.render('auth', render);
    } catch (e) {
      render.mode = 'signup';
      render.error = e.message;
      res.render('auth', render);
    }
  };

  loginUser = async (req, res, next) => {
    let render = new RenderOptions('Profile');

    if (req.validationError) {
      render.pageTitle = 'Login';
      render.mode = 'login';
      render.error = req.validationError;
      return res.render('auth', render);
    }

    try {
      const user = await this.userService.loginUser(req.loginDTO);

      const done = await this.authService.generateSession(user, req);

      if (done) {
        return res.redirect('/me');
      }

      throw new Error('Server Error');
    } catch (e) {
      render.pageTitle = 'Login';
      render.mode = 'login';
      render.error = e.message;
      return res.render('auth', render);
    }
  };
}

module.exports = AuthController;
