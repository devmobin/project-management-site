import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../UserModule/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}