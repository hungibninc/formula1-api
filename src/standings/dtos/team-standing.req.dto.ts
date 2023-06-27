import { IsOptional, Min, Max, IsNumber, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

const date = new Date();

export class TeamStandingReqDto {
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
      'This is the name of the team and can be optional. Result will be searched on all teams if empty',
    default: 'RED BULL RACING HONDA RBPT',
  })
  @Transform(({ value }) => value.toLowerCase())
  @IsString()
  @IsOptional()
  team: string;
}
