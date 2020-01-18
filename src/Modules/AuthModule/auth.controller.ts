import { Controller, Post, Render, Body, UsePipes, Res } from '@nestjs/common';
import { SignupDTO } from '../Shared/dto/signup.dto';
import { ValidationPipe } from '../Shared/pipe/validation.pipe';
import { RenderOptions } from 'src/Config/render-options';
import { UserAuthService } from '../UserModule/user.auth.service';
import { LoginDTO } from '../Shared/dto/login.dto';
import { Response } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly userAuthService: UserAuthService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  @Render('auth')
  async signupUser(@Body() signupDTO: SignupDTO): Promise<RenderOptions> {
    let message: string, error: string;

    try {
      await this.userAuthService.registerUser(signupDTO);
      message = 'Signup has done. Now you can login.';
    } catch (e) {
      error = e.message;
    }

    return { pageTitle: 'Join us', mode: 'login', error, message };
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  async loginUser(
    @Body() loginDTO: LoginDTO,
    @Res() res: Response,
  ): Promise<void> {
    let error: string;

    try {
      const valid = await this.userAuthService.validateUserCredentials(loginDTO);
      if (valid) {
        // generate session
      } else {
        error = 'incorrect password';
      }
    } catch (e) {
      error = e.message;
    }

    return res.render('auth', { pageTitle: 'Join us', mode: 'login', error });
  }
}
