import { IsOptional, Min, Max, IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

const date = new Date();

export class RankingReqDto {
  @ApiProperty({
    type: Number,
    description: 'It will be ' + date.getFullYear() + ' if empty',
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
    description: 'Name of the races and it is optional.',
  })
  @Transform(({ value }) => value.toLowerCase())
  @IsString()
  @IsOptional()
  grand_name: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Name of the driver and it is optional.',
  })
  @Transform(({ value }) => value.toLowerCase())
  @IsString()
  @IsOptional()
  driver_name: string;
}
