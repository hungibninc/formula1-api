import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Standing } from './standing.entity';

@Injectable()
export class StandingsService {
  constructor(@InjectRepository(Standing) private repo: Repository<Standing>) {}

  getRacing() {
    return this.repo.createQueryBuilder().select('*').where('1=1').getRawMany();
  }
}
