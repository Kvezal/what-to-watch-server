import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { FavoriteModule } from './favorite.module';
import { FavoriteService } from './favorite.service';


const favoriteData = {
  isFavorite: false,
};

describe(`Favorite API end-point`, () => {
  let app: INestApplication;
  const favoriteService = {
    create: () => `test`,
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [FavoriteModule],
    })
      .overrideProvider(FavoriteService)
      .useValue(favoriteService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe(`"isFavorite" property`, () => {
    it(`When POST /favorite/:filmId endpoint without property status code should be 400`, () => {
      const favorite = {...favoriteData};
      delete favorite.isFavorite;
      return request(app.getHttpServer())
        .put(`/favorite/1`)
        .send(favorite)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /favorite/:filmId endpoint with invalid property value status code should be 400`, () => {
      const favorite = {...favoriteData};
      favorite.isFavorite = null;
      return request(app.getHttpServer())
        .put(`/favorite/1`)
        .send(favorite)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /favorite/:filmId endpoint with valid property status code should be 200`, () => {
      const favorite = {...favoriteData};
      favorite.isFavorite = true;
      return request(app.getHttpServer())
        .put(`/favorite/1`)
        .send(favorite)
        .expect(HttpStatus.OK);
    });
  });

  describe(`"filmId" param`, () => {
    it(`When POST /favorite/:filmId endpoint with invalid param value status code should be 400`, () => {
      const favorite = {...favoriteData};
      return request(app.getHttpServer())
        .put(`/favorite/invalid-film-id`)
        .send(favorite)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /favorite/:filmId endpoint with valid param status code should be 200`, () => {
      const favorite = {...favoriteData};
      return request(app.getHttpServer())
        .put(`/favorite/1`)
        .send(favorite)
        .expect(HttpStatus.OK);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
