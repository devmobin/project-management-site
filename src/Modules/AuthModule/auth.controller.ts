import { Controller, Post, Render, Body, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDTO } from '../Shared/dto/signup.dto';
import { ValidationPipe } from '../Shared/pipe/validation.pipe';
import { RenderOptions } from 'src/Config/render-options';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  @Render('auth')
  signupUser(@Body() signupDTO: SignupDTO): RenderOptions {
    this.authService.registerUser(signupDTO);

    return { pageTitle: 'Signed', mode: 'login' };
  }
}
