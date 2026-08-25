import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';

export const authConfig = {
  imports: [ConfigModule],
  providers: [AuthService],
};