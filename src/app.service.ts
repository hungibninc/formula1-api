import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome(): string {
    return 'Welcome to Formula1 Racing!';
  }
}
