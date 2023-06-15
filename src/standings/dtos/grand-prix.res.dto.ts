import { Expose } from 'class-transformer';

export class GrandPrixResDto {
  @Expose()
  grand_prix: string;
}
