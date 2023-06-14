import { Test, TestingModule } from '@nestjs/testing';
import { StadingsService } from './standings.service';

describe('StadingsService', () => {
  let service: StadingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StadingsService],
    }).compile();

    service = module.get<StadingsService>(StadingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
