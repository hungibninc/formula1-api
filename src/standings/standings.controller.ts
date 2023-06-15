import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { StandingsService } from './standings.service';
import { BoardDetailReqDto } from './dtos/board-detail.req.dto';
import { BoardDetailResDto } from './dtos/board-detail.res.dto';
import { TopBoardReqDto } from './dtos/top-board.req.dto';
import { TopBoardResDto } from './dtos/top-board.res.dto';
import { DriverReqDto } from './dtos/driver.req.dto';
import { DriverResDto } from './dtos/driver.res.dto';

@Controller('standings')
export class StandingsController {
  constructor(private standingsService: StandingsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns the top of winners of all Grand-Prix by year.',
  })
  @Serialize(TopBoardResDto)
  getRacing(@Query() query: TopBoardReqDto) {
    return this.standingsService.topBoard(query);
  }

  @Get('/race')
  @ApiResponse({
    status: 200,
    description: 'Returns a list of ratings by year of a specific Grand-Prix',
  })
  @Serialize(BoardDetailResDto)
  getRacingDetail(@Query() query: BoardDetailReqDto) {
    return this.standingsService.boardDetail(query);
  }

  @Get('/driver')
  @ApiResponse({
    status: 200,
    description: 'Driver Standings by year or Grand-Prix',
  })
  @Serialize(DriverResDto)
  getDriver(@Query() query: DriverReqDto) {
    return this.standingsService.topdriver(query);
  }
}
