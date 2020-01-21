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

      req.session.user = user;

      return req.session.save(e => {
        if (e) {
          throw new Error('Server Error');
        }

        res.redirect('/me');
      });
    } catch (e) {
      render.pageTitle = 'Login';
      render.mode = 'login';
      render.error = e.message;
      return res.render('auth', render);
    }
  };
}

module.exports = AuthController;
