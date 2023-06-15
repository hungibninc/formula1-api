import { IsOptional, Min, Max, IsNumber, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

const date = new Date();

export class DriverReqDto {
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

  @ApiPropertyOptional({
    type: String,
    description:
      'This is the name of the races and can be optional. Result will be searched on all races if empty',
    default: 'Bahrain',
  })
  @Transform(({ value }) => value.toLowerCase())
  @IsString()
  @IsOptional()
  grand_name: string;

  @ApiPropertyOptional({
    type: String,
    description:
      'This is the name of the driver and can be optional. Result will be searched on all drivers if empty',
    default: 'Alexander Albon',
  })
  @Transform(({ value }) => value.toLowerCase())
  @IsString()
  @IsOptional()
  driver_name: string;
}
