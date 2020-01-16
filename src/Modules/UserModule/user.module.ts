import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserAuthService } from './user.auth.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserAuthService],
  exports: [UserAuthService]
})
export class UserModule {}
