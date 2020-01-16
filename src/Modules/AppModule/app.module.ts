import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from '../AuthModule/auth.module';
import { UserModule } from '../UserModule/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
