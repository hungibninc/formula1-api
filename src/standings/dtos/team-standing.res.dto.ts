import { Expose } from 'class-transformer';

export class TeamStandingResDto {
  @Expose()
  grand_prix: string;

  @Expose()
  racing_date: string;

  @Expose()
  team: string;

  @Expose()
  points: number;
}
