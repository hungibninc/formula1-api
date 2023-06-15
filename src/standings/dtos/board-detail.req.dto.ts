import { IsString, IsOptional, Min, Max, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class BoardDetailReqDto {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
  })
  @IsNumber()
  @Min(1950)
  @Max(new Date().getFullYear())
  @IsOptional()
  @Transform(({ value }) => Number(value))
  year: number;

  @ApiPropertyOptional({
    type: String,
    description: 'This is an optional property',
    default: 'bahrain',
  })
  @Transform(({ value }) => value.toLowerCase())
  @IsString()
  @IsOptional()
  name: string;
}
