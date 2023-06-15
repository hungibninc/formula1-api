import { IsOptional, Min, Max, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

const date = new Date();

export class TopBoardReqDto {
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
}
