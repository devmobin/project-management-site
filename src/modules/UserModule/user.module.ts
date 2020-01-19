import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserAuthService } from './user.auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './db/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [UserService, UserAuthService],
  exports: [UserAuthService]
})
export class UserModule {}
