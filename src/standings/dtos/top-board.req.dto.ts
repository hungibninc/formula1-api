import { IsOptional, Min, Max, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class TopBoardReqDto {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    default: new Date().getFullYear(),
  })
  @IsNumber()
  @Min(1950)
  @Max(new Date().getFullYear())
  @IsOptional()
  @Transform(({ value }) => Number(value))
  year: number;
}
