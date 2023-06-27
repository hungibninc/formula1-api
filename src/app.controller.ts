import { Controller, Get, Query } from '@nestjs/common';
import { StandingsService } from './standings/standings.service';
import { ApiResponse } from '@nestjs/swagger';
import { Serialize } from './interceptors/serialize.interceptor';
import { GrandPrixResDto } from './standings/dtos/grand-prix.res.dto';
import { GrandPrixReqDto } from './standings/dtos/grand-prix.req.dto';
import { DriverListReqDto } from './standings/dtos/driver.list.req.dto';
import { DriverListResDto } from './standings/dtos/driver.list.res.dto';
import { TeamReqDto } from './standings/dtos/team.req.dto';
import { TeamResDto } from './standings/dtos/team.res.dto';

@Controller()
export class AppController {
  constructor(private readonly standingsService: StandingsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description:
      "Returns the names of the races filtered by year or the participating driver's name.",
  })
  @Serialize(GrandPrixResDto)
  getRacing(@Query() query: GrandPrixReqDto) {
    return this.standingsService.getGrandPrix(query);
  }

  @Get('driver')
  @ApiResponse({
    status: 200,
    description:
      "Returns the name of participating drivers filtered by year or races's name.",
  })
  @Serialize(DriverListResDto)
  getDriver(@Query() query: DriverListReqDto) {
    return this.standingsService.getDriver(query);
  }

  @Get('team')
  @ApiResponse({
    status: 200,
    description: 'Returns the name of participating team filtered by year.',
  })
  @Serialize(TeamResDto)
  getTeam(@Query() query: TeamReqDto) {
    return this.standingsService.getTeam(query);
  }
}
