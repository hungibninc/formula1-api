import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Standing } from './standing.entity';
import { GrandPrixReqDto } from './dtos/grand-prix.req.dto';
import { TopBoardReqDto } from './dtos/top-board.req.dto';
import { BoardDetailReqDto } from './dtos/board-detail.req.dto';
import { DriverReqDto } from './dtos/driver.req.dto';

@Injectable()
export class StandingsService {
  constructor(@InjectRepository(Standing) private repo: Repository<Standing>) {}

  getGrandPrix({ year }: GrandPrixReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo
      .createQueryBuilder()
      .select('DISTINCT grand_prix', 'grand_prix');
    query.andWhere('YEAR(racing_date) = :year', { year });
    return query.getRawMany();
  }

  async topBoard({ year }: TopBoardReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = await this.repo.createQueryBuilder().select('*');
    query.where('position=1');
    query.andWhere('YEAR(racing_date) = :year', { year });
    return await query.getRawMany();
  }

  async boardDetail({ year, name }: BoardDetailReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = await this.repo.createQueryBuilder().select('*');
    query.andWhere('YEAR(racing_date) = :year', { year });
    if (name) {
      query.andWhere('grand_prix=:name', { name });
    }

    return await query.getRawMany();
  }

  async topdriver({ year, name }: DriverReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = await this.repo
      .createQueryBuilder('standing')
      .select('driver')
      .addSelect('nationality')
      .addSelect('team')
      .addSelect('SUM(standing.points)', 'points');
    query.andWhere('YEAR(racing_date) = :year', { year });
    if (name) {
      query.andWhere('grand_prix=:name', { name });
    }
    query.groupBy('driver');
    query.orderBy('points', 'DESC');

    return await query.getRawMany();
  }
}
