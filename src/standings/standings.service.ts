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
import { DriverReqDto } from './dtos/driver.req.dto';
import { TeamReqDto } from './dtos/team.req.dto';
import { TeamStandingReqDto } from './dtos/team-standing.req.dto';

@Injectable()
export class StandingsService {
  constructor(@InjectRepository(Standing) private repo: Repository<Standing>) {}

  getGrandPrix({ year, driver_name }: GrandPrixReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo
      .createQueryBuilder()
      .select('DISTINCT grand_prix', 'grand_prix');
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
      .select('DISTINCT driver', 'driver');
    query.andWhere('YEAR(racing_date) = :year', { year });
    if (grand_name) {
      query.andWhere('grand_prix=:grand_name', { grand_name });
    }
    return query.getRawMany();
  }

  getTeam({ year }: TeamReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo
      .createQueryBuilder()
      .select('DISTINCT team', 'team');
    query.where('YEAR(racing_date) = :year', { year });

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
        .select('grand_prix')
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
        .select('MAX(position)', 'position')
        .addSelect('MAX(license_plate)', 'license_plate')
        .addSelect('driver')
        .addSelect('MAX(team)', 'team')
        .addSelect('MAX(laps)', 'laps')
        .addSelect('MAX(time_retire)', 'time_retire')
        .addSelect('SUM(points)', 'points');
      query.andWhere('YEAR(racing_date) = :year', { year });
      query.andWhere('grand_prix=:grand_name', { grand_name });
      query.groupBy('driver');
      query.orderBy('points', 'DESC');
      query.addOrderBy('position', 'ASC');
    } else if (driver_name) {
      //  grand_name is empty
      query
        .select('grand_prix')
        .addSelect('racing_date')
        .addSelect('team')
        .addSelect('points');
      query.andWhere('YEAR(racing_date) = :year', { year });
      query.andWhere('driver=:driver_name', { driver_name });
      query.orderBy('racing_date', 'ASC');
    } else {
      //  grand_name and driver_name are empty
      query
        .select('driver')
        .addSelect('MAX(nationality)', 'nationality')
        .addSelect('MAX(team)', 'team')
        .addSelect('SUM(points)', 'points');
      query.andWhere('YEAR(racing_date) = :year', { year });

      query.groupBy('driver');
      query.orderBy('points', 'DESC');
    }

    return query.getRawMany();
  }

  driverStandings({ year, driver_name }: DriverReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo
      .createQueryBuilder('standing')
      .select('grand_prix')
      .addSelect('racing_date')
      .addSelect('team')
      .addSelect('position')
      .addSelect('points');
    query.where('YEAR(racing_date) = :year', { year });
    if (driver_name) {
      query.andWhere('driver=:driver_name', { driver_name });
    }
    query.orderBy('racing_date', 'ASC');

    return query.getRawMany();
  }

  teamStandings({ year, team }: TeamStandingReqDto) {
    if (!year) year = new Date().getFullYear();

    const query = this.repo.createQueryBuilder();

    if (team) {
      //  driver_name is empty
      query
        .select('grand_prix')
        .addSelect('MAX(racing_date)', 'racing_date')
        .addSelect('SUM(points)', 'points');
      query.andWhere('YEAR(racing_date) = :year', { year });
      query.andWhere('team=:team', { team });
      query.groupBy('grand_prix');
      query.orderBy('racing_date', 'ASC');
    } else {
      //  grand_name and driver_name are empty
      query.select('team').addSelect('SUM(points)', 'points');
      query.andWhere('YEAR(racing_date) = :year', { year });
      query.groupBy('team');
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

  */
}
