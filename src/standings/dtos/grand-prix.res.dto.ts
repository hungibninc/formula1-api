import { Expose } from 'class-transformer';

export class GrandPrixResDto {
  @Expose()
  id: number;

  @Expose()
  grand_prix: string;
}
