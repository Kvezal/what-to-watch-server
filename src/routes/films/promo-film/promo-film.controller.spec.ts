import { Test, TestingModule } from '@nestjs/testing';
import { PromoFilmController } from './promo-film.controller';

describe('PromoFilmController', () => {
  let controller: PromoFilmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromoFilmController],
    }).compile();

    controller = module.get<PromoFilmController>(PromoFilmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
