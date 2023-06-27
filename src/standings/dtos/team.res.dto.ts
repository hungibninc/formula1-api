import { Expose } from 'class-transformer';

export class TeamResDto {
  @Expose()
  team: string;
}
