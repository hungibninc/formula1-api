import { IsOptional, Min, Max, IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

const date = new Date();

export class GrandPrixReqDto {
  @ApiProperty({
    type: Number,
    description: 'This is required.',
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
    description: 'Name of the driver and it is optional.',
    default: 'Max Verstappen',
  })
  @Transform(({ value }) => value.toLowerCase())
  @IsString()
  @IsOptional()
  driver_name: string;
}
