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
  async signupUser(@Body() signupDTO: SignupDTO): Promise<RenderOptions> {
    let error: string;
    try {
      await this.authService.registerUser(signupDTO);
    } catch (e) {
      error = e.message;
    }
    
    return { pageTitle: 'Signed', mode: 'login', error };
  }
}
