import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '../application/user.service';
import { AuthService } from '../infrastructure/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthService],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
})
export class UserModule {}