import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from '../AuthModule/auth.module';
import { UserModule } from '../UserModule/user.module';
import { typeOrmOptions } from 'src/Config/config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmOptions), AuthModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
