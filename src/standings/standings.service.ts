import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Standing } from './standing.entity';
import { GrandPrixReqDto } from './dtos/grand-prix.req.dto';
import { TopBoardReqDto } from './dtos/top-board.req.dto';
// import { BoardDetailReqDto } from './dtos/board-detail.req.dto';
// import { DriverReqDto } from './dtos/driver.req.dto';
import { RankingReqDto } from './dtos/ranking.req.dto';
import { DriverListReqDto } from './dtos/driver.list.req.dto';

@Injectable()
export class StandingsService {
  constructor(@InjectRepository(Standing) private repo: Repository<Standing>) {}

  getGrandPrix({ year, driver_name }: GrandPrixReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo
      .createQueryBuilder()
      .select('DISTINCT id', 'id')
      .addSelect('grand_prix');
    query.andWhere('YEAR(racing_date) = :year', { year });
    if (driver_name) {
      query.andWhere('driver=:driver_name', { driver_name });
    }
    return query.getRawMany();
  }

  getDriver({ year, grand_name }: DriverListReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo
      .createQueryBuilder()
      .select('DISTINCT id', 'id')
      .addSelect('driver');
    query.andWhere('YEAR(racing_date) = :year', { year });
    if (grand_name) {
      query.andWhere('grand_prix=:grand_name', { grand_name });
    }
    return query.getRawMany();
  }

  topBoard({ year }: TopBoardReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo.createQueryBuilder().select('*');
    query.where('position=1');
    query.andWhere('YEAR(racing_date) = :year', { year });
    return query.getRawMany();
  }

  getRanking({ year, grand_name, driver_name }: RankingReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo.createQueryBuilder();

    if (grand_name && driver_name) {
      query
        .select('id')
        .addSelect('grand_prix')
        .addSelect('racing_date')
        .addSelect('team')
        .addSelect('points');
      query.andWhere('YEAR(racing_date) = :year', { year });
      query.andWhere('driver=:driver_name', { driver_name });
      query.andWhere('grand_prix=:grand_name', { grand_name });
      query.orderBy('racing_date', 'ASC');
    } else if (grand_name) {
      //  driver_name is empty
      query
        .select('id')
        .addSelect('position')
        .addSelect('license_plate')
        .addSelect('driver')
        .addSelect('team')
        .addSelect('laps')
        .addSelect('time_retire')
        .addSelect('SUM(standing.points)', 'points');
      query.andWhere('YEAR(racing_date) = :year', { year });
      query.andWhere('grand_prix=:grand_name', { grand_name });
      query.groupBy('driver');
      query.orderBy('points', 'DESC');
    } else if (driver_name) {
      //  grand_name is empty
      query
        .select('id')
        .addSelect('grand_prix')
        .addSelect('racing_date')
        .addSelect('team')
        .addSelect('points');
      query.andWhere('YEAR(racing_date) = :year', { year });
      query.andWhere('driver=:driver_name', { driver_name });
      query.orderBy('racing_date', 'ASC');
    } else {
      //  grand_name and driver_name are empty
      query
        .select('id')
        .addSelect('driver')
        .addSelect('nationality')
        .addSelect('team')
        .addSelect('SUM(standing.points)', 'points');
      query.andWhere('YEAR(racing_date) = :year', { year });

      query.groupBy('driver');
      query.orderBy('points', 'DESC');
    }

    return query.getRawMany();
  }

  /* boardDetail({ year, name }: BoardDetailReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo.createQueryBuilder().select('*');
    query.andWhere('YEAR(racing_date) = :year', { year });
    if (name) {
      query.andWhere('grand_prix=:name', { name });
    }

    return query.getRawMany();
  }

  driverStandings({ year, grand_name, driver_name }: DriverReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo
      .createQueryBuilder('standing')
      .select('driver')
      .addSelect('nationality')
      .addSelect('team')
      .addSelect('SUM(standing.points)', 'points');
    query.andWhere('YEAR(racing_date) = :year', { year });
    if (grand_name) {
      query.andWhere('grand_prix=:grand_name', { grand_name });
    }
    query.groupBy('driver');
    query.orderBy('points', 'DESC');

    return query.getRawMany();
  } */
}
