const RenderOptions = require('../../config/render-options');

class AuthController {
  constructor(authService, userService) {
    // AuthService
    this.authService = authService;
    // UserService
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
    } catch (e) {
      render.mode = 'signup';
      render.error = e.message;
    }

    res.render('auth', render);
  };

  loginUser = (req, res, next) => {
    this.authService.user();
    res.send('ok');
  };
}

module.exports = AuthController;


// @Post('login')
// @UsePipes(ValidationPipe)
// async loginUser(
//   @Body() loginDTO: LoginDTO,
//   @Res() res: Response,
// ): Promise<void> {
//   let error: string;

//   try {
//     const valid = await this.userAuthService.validateUserCredentials(loginDTO);
//     if (valid) {
//       // generate session
//     } else {
//       error = 'incorrect password';
//     }
//   } catch (e) {
//     error = e.message;
//   }

//   return res.render('auth', { pageTitle: 'Join us', mode: 'login', error });
// }
