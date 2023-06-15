import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { StandingsService } from './standings.service';
import { TopBoardReqDto } from './dtos/top-board.req.dto';
import { TopBoardResDto } from './dtos/top-board.res.dto';
import { BoardDetailReqDto } from './dtos/board-detail.req.dto';
import { BoardDetailResDto } from './dtos/board-detail.res.dto';
import { DriverReqDto } from './dtos/driver.req.dto';
import { DriverResDto } from './dtos/driver.res.dto';
import { RankingReqDto } from './dtos/ranking.req.dto';
import { RankingResDto } from './dtos/ranking.res.dto';

@Controller('standings')
export class StandingsController {
  constructor(private standingsService: StandingsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns the race results filtered by year.',
  })
  @Serialize(TopBoardResDto)
  getRacing(@Query() query: TopBoardReqDto) {
    return this.standingsService.topBoard(query);
  }

  @Get('/ranking')
  @ApiResponse({
    status: 200,
    description:
      'Returns the result of a race or Driver Standings filtered by year.<br />If name of the race and driver are empty then it will return Driver Standings<br />If name of the race is entered and name of driver is empty then it will return the drivers standing of that race.<br />If name of driver is entered and name of the race is empty then it will return the race position of that driver in all races.',
  })
  @Serialize(RankingResDto)
  getRanking(@Query() query: RankingReqDto) {
    return this.standingsService.getRanking(query);
  }

  /* @Get('/race')
  @ApiResponse({
    status: 200,
    description: 'Returns a list of ratings by year of a specific races',
  })
  @Serialize(BoardDetailResDto)
  getRacingDetail(@Query() query: BoardDetailReqDto) {
    return this.standingsService.boardDetail(query);
  }

  @Get('/driver')
  @ApiResponse({
    status: 200,
    description: 'Driver Standings by year or races',
  })
  @Serialize(DriverResDto)
  getDriver(@Query() query: DriverReqDto) {
    return this.standingsService.driverStandings(query);
  } */
}
