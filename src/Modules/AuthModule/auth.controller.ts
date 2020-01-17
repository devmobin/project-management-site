import { Controller, Post, Render, Body, UsePipes } from '@nestjs/common';
import { SignupDTO } from '../Shared/dto/signup.dto';
import { ValidationPipe } from '../Shared/pipe/validation.pipe';
import { RenderOptions } from 'src/Config/render-options';
import { UserAuthService } from '../UserModule/user.auth.service';

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

    return { pageTitle: 'Login', mode: 'login', error, message };
  }
}
