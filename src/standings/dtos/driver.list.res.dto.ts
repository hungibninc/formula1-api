import { Expose } from 'class-transformer';

export class DriverListResDto {
  @Expose()
  driver: string;
}
