import { Expose } from 'class-transformer';

export class BoardDetailResDto {
  @Expose()
  grand_prix: string;

  @Expose()
  racing_date: string;

  @Expose()
  position: string;

  @Expose()
  ranking: number;

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
