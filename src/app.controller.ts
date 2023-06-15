import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { StandingsService } from './standings/standings.service';
import { ApiResponse } from '@nestjs/swagger';
import { Serialize } from './interceptors/serialize.interceptor';
import { GrandPrixResDto } from './standings/dtos/grand-prix.res.dto';
import { GrandPrixReqDto } from './standings/dtos/grand-prix.req.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly standingsService: StandingsService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns all name Grand-Prix by year.',
  })
  @Serialize(GrandPrixResDto)
  getRacing(@Query() query: GrandPrixReqDto) {
    return this.standingsService.getGrandPrix(query);
  }
}
