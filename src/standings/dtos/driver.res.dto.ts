import { Expose } from 'class-transformer';

export class DriverResDto {
  @Expose()
  position: string;

  @Expose()
  driver: string;

  @Expose()
  nationality: string;

  @Expose()
  team: string;

  @Expose()
  points: number;
}
