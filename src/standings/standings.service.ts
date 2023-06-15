import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Standing } from './standing.entity';
import { BoardDetailReqDto } from './dtos/board-detail.req.dto';
import { TopBoardReqDto } from './dtos/top-board.req.dto';

@Injectable()
export class StandingsService {
  constructor(@InjectRepository(Standing) private repo: Repository<Standing>) {}

  async topBoard({ year }: TopBoardReqDto) {
    const query = await this.repo.createQueryBuilder().select('*');

    query.where('position=1');
    if (year) {
      query.andWhere('YEAR(racing_date) = :year', { year });
    }

    return await query.getRawMany();
  }

  async boardDetail({ year, name }: BoardDetailReqDto) {
    const query = await this.repo.createQueryBuilder().select('*');

    if (year) {
      query.andWhere('YEAR(racing_date) = :year', { year });
    }

    if (name) {
      query.andWhere('grand_prix=:name', { name });
    }

    return await query.getRawMany();
  }
}
