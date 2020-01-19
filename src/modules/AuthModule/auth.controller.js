class AuthController {
  // AuthService
  authService = undefined;

  constructor(authService) {
    this.authService = authService;
  }

  signupUser = (req, res, next) => {
    res.send('hello');
  };

  loginUser = (req, res, next) => {
    this.authService.user();
    res.send('ok');
  };
}

module.exports = AuthController;

// @Post('signup')
// @UsePipes(ValidationPipe)
// @Render('auth')
// async signupUser(@Body() signupDTO: SignupDTO): Promise<RenderOptions> {
//   let message: string, error: string;

//   try {
//     await this.userAuthService.registerUser(signupDTO);
//     message = 'Signup has done. Now you can login.';
//   } catch (e) {
//     error = e.message;
//   }

//   return { pageTitle: 'Join us', mode: 'login', error, message };
// }

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
