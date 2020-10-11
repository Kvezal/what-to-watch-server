import { Test, TestingModule } from '@nestjs/testing';
import { PromoFilmService } from './promo-film.service';

describe('PromoFilmService', () => {
  let service: PromoFilmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromoFilmService],
    }).compile();

    service = module.get<PromoFilmService>(PromoFilmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
