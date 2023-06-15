import { IsString, IsOptional, Min, Max, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

const date = new Date();

export class BoardDetailReqDto {
  @ApiPropertyOptional({
    type: Number,
    description:
      'This is the year of the races. It will be ' +
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

  @ApiPropertyOptional({
    type: String,
    description:
      'This is the name of the races and can be optional. Result will be searched on all races if empty.',
    default: 'bahrain',
  })
  @Transform(({ value }) => value.toLowerCase())
  @IsString()
  @IsOptional()
  name: string;
}
