import { Expose } from 'class-transformer';

export class TopBoardResDto {
  @Expose()
  grand_prix: string;

  @Expose()
  racing_date: string;

  @Expose()
  driver: string;

  @Expose()
  team: string;

  @Expose()
  laps: number;

  @Expose()
  time_retire: string;
}
