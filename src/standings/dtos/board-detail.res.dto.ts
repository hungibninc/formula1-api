import { Expose } from 'class-transformer';

export class BoardDetailResDto {
  @Expose()
  position: string;

  @Expose()
  license_plate: number;

  @Expose()
  driver: string;

  @Expose()
  team: string;

  @Expose()
  laps: number;

  @Expose()
  time_retire: string;

  @Expose()
  points: number;
}
