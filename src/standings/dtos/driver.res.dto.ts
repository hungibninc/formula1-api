import { Expose } from 'class-transformer';

export class DriverResDto {
  @Expose()
  grand_prix: string;

  @Expose()
  racing_date: string;

  @Expose()
  team: string;

  @Expose()
  position: string;

  @Expose()
  points: number;
}
