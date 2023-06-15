import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandingsService } from './standings.service';
import { StandingsController } from './standings.controller';
import { Standing } from './standing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Standing])],
  providers: [StandingsService],
  controllers: [StandingsController],
  exports: [StandingsService],
})
export class StandingsModule {}
