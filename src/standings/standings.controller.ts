import { Controller, Get, Query } from '@nestjs/common';
import { StandingsService } from './standings.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { BoardDetailReqDto } from './dtos/board-detail.req.dto';
import { BoardDetailResDto } from './dtos/board-detail.res.dto';
import { TopBoardReqDto } from './dtos/top-board.req.dto';
import { TopBoardResDto } from './dtos/top-board.res.dto';

@Controller('standings')
export class StandingsController {
  constructor(private standingsService: StandingsService) {}

  @Get()
  @Serialize(TopBoardResDto)
  getRacing(@Query() query: TopBoardReqDto) {
    return this.standingsService.topBoard(query);
  }

  @Get('/grand_prix')
  @Serialize(BoardDetailResDto)
  getRacingDetail(@Query() query: BoardDetailReqDto) {
    return this.standingsService.boardDetail(query);
  }
}
