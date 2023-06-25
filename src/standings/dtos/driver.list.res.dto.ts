import { Expose } from 'class-transformer';

export class DriverListResDto {
  @Expose()
  id: number;

  @Expose()
  driver: string;
}
