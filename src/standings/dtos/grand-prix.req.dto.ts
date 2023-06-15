import { IsOptional, Min, Max, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

const date = new Date();

export class GrandPrixReqDto {
  @ApiPropertyOptional({
    type: Number,
    description:
      'This is an optional property. It will be ' +
      date.getFullYear() +
      ' if empty',
    default: date.getFullYear(),
  })
  @IsNumber()
  @Min(1950)
  @Max(date.getFullYear())
  @IsOptional()
  @Transform(({ value }) => Number(value))
  year: number;
}
