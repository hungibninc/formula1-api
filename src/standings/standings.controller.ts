import { Controller, Get } from '@nestjs/common';
import { StandingsService } from './standings.service';
import { RacingDto } from './dtos/racing.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Controller('standings')
@Serialize(RacingDto)
export class StandingsController {
  constructor(private standingsService: StandingsService) {}

  @Get()
  getEstimate() {
    return this.standingsService.getRacing();
  }
}
