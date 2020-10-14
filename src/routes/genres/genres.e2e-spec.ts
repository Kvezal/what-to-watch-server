import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { GenresModule } from './genres.module';
import { GenresService } from './genres.service';


const genreData = {
  title: `test genre name`
};

describe(`Genres API end-point`, () => {
  let app: INestApplication;
  const genresService = {
    create: () => `test`,
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [GenresModule],
    })
      .overrideProvider(GenresService)
      .useValue(genresService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`When POST /genres endpoint without data status code should be 400`, () => {
    return request(app.getHttpServer())
      .post(`/genres`)
      .send()
      .expect(HttpStatus.BAD_REQUEST);
  });

  describe(`"title" property`, () => {
    it(`When POST /genres endpoint without property status code should be 400`, () => {
      const genre = {...genreData};
      delete genre.title;
      return request(app.getHttpServer())
        .post(`/genres`)
        .send(genre)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /genres endpoint with too short property status code should be 400`, () => {
      const genre = {...genreData};
      genre.title = `f`;
      return request(app.getHttpServer())
        .post(`/genres`)
        .send(genre)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /genres endpoint with min length property status code should be 201`, () => {
      const genre = {...genreData};
      genre.title = `f`.repeat(2);
      return request(app.getHttpServer())
        .post(`/genres`)
        .send(genre)
        .expect(HttpStatus.CREATED);
    });

    it(`When POST /genres endpoint with too long property status code should be 400`, () => {
      const genre = {...genreData};
      genre.title = `f`.repeat(41);
      return request(app.getHttpServer())
        .post(`/genres`)
        .send(genre)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /genres endpoint with max length property status code should be 201`, () => {
      const genre = {...genreData};
      genre.title = `f`.repeat(40);
      return request(app.getHttpServer())
        .post(`/genres`)
        .send(genre)
        .expect(HttpStatus.CREATED);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
