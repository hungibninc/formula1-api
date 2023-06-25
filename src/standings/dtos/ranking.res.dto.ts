import { Expose } from 'class-transformer';

export class RankingResDto {
  @Expose()
  id: number;

  @Expose()
  position: string;

  @Expose()
  license_plate: string;

  @Expose()
  driver: string;

  @Expose()
  nationality: string;

  @Expose()
  grand_prix: string;

  @Expose()
  racing_date: string;

  @Expose()
  team: string;

  @Expose()
  laps: number;

  @Expose()
  time_retire: string;

  @Expose()
  points: number;
}
