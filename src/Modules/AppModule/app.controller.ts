import { Controller, Get, Render } from '@nestjs/common';
import { RenderOptions } from './render-options';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('home-page')
  renderLandingPage(): RenderOptions {
    return { pageTitle: 'Project Management' };
  }

  @Get('signup/')
  @Render('auth')
  renderSignupPage(): RenderOptions {
    return { pageTitle: 'SignUp', mode: 'signup' };
  }

  @Get('login/')
  @Render('auth')
  renderLoginPage(): RenderOptions {
    return { pageTitle: 'Login', mode: 'login' };
  }
}
