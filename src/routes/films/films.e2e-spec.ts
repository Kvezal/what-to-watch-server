import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { FilmsModule } from './films.module';
import { FilmsService } from './films.service';


const filmData = {
  title: `title`,
  posterImage: `image`,
  previewImage: `image`,
  backgroundImage: `image`,
  backgroundColor: `#ffffff`,
  video: `video`,
  previewVideo: `link`,
  description: `d`.repeat(30),
  runtime: 101,
  release: new Date().toISOString(),
};

const promoFilmStateData = {
  filmId: 1,
  isPromo: false,
};

describe(`Genres API end-point`, () => {
  let app: INestApplication;
  const filmService = {
    create: () => `test`,
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [FilmsModule],
    })
      .overrideProvider(FilmsService)
      .useValue(filmService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe(`POST`, () => {
    describe(`"title" property`, () => {
      it(`When POST /films endpoint without property status code should be 400`, () => {
        const film = {...filmData};
        delete film.title;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with too short property status code should be 400`, () => {
        const film = {...filmData};
        film.title = `f`;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with min length property status code should be 201`, () => {
        const film = {...filmData};
        film.title = `f`.repeat(2);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });

      it(`When POST /films endpoint with too long property status code should be 400`, () => {
        const film = {...filmData};
        film.title = `f`.repeat(151);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with max length property status code should be 201`, () => {
        const film = {...filmData};
        film.title = `f`.repeat(150);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });
    });

    describe(`"posterImage" property`, () => {
      it(`When POST /films endpoint without property status code should be 400`, () => {
        const film = {...filmData};
        delete film.posterImage;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with too short property status code should be 400`, () => {
        const film = {...filmData};
        film.posterImage = `f`;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with min length property status code should be 201`, () => {
        const film = {...filmData};
        film.posterImage = `f`.repeat(2);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });

      it(`When POST /films endpoint with too long property status code should be 400`, () => {
        const film = {...filmData};
        film.posterImage = `f`.repeat(151);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with max length property status code should be 201`, () => {
        const film = {...filmData};
        film.posterImage = `f`.repeat(150);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });
    });

    describe(`"previewImage" property`, () => {
      it(`When POST /films endpoint without property status code should be 400`, () => {
        const film = {...filmData};
        delete film.previewImage;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with too short property status code should be 400`, () => {
        const film = {...filmData};
        film.previewImage = `f`;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with min length property status code should be 201`, () => {
        const film = {...filmData};
        film.previewImage = `f`.repeat(2);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });

      it(`When POST /films endpoint with too long property status code should be 400`, () => {
        const film = {...filmData};
        film.previewImage = `f`.repeat(151);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with max length property status code should be 201`, () => {
        const film = {...filmData};
        film.previewImage = `f`.repeat(150);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });
    });

    describe(`"backgroundImage" property`, () => {
      it(`When POST /films endpoint without property status code should be 400`, () => {
        const film = {...filmData};
        delete film.backgroundImage;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with too short property status code should be 400`, () => {
        const film = {...filmData};
        film.backgroundImage = `f`;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with min length property status code should be 201`, () => {
        const film = {...filmData};
        film.backgroundImage = `f`.repeat(2);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });

      it(`When POST /films endpoint with too long property status code should be 400`, () => {
        const film = {...filmData};
        film.backgroundImage = `f`.repeat(151);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with max length property status code should be 201`, () => {
        const film = {...filmData};
        film.backgroundImage = `f`.repeat(150);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });
    });

    describe(`"backgroundColor" property`, () => {
      it(`When POST /films endpoint without property status code should be 400`, () => {
        const film = {...filmData};
        delete film.backgroundColor;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it.each([`#ff`, `#vvv`, `#13456`, `#1345688`])(`When POST /films endpoint with invalid %p property value status code should be 400`, (color) => {
        const film = {...filmData};
        film.backgroundColor = color;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it.each([`#fff`, `#fe5df4`])(`When POST /films endpoint with %p property value status code should be 201`, (color) => {
        const film = {...filmData};
        film.backgroundColor = color;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });
    });

    describe(`"video" property`, () => {
      it(`When POST /films endpoint without property status code should be 400`, () => {
        const film = {...filmData};
        delete film.video;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with too short property status code should be 400`, () => {
        const film = {...filmData};
        film.video = `f`;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with min length property status code should be 201`, () => {
        const film = {...filmData};
        film.video = `f`.repeat(2);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });

      it(`When POST /films endpoint with too long property status code should be 400`, () => {
        const film = {...filmData};
        film.video = `f`.repeat(151);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with max length property status code should be 201`, () => {
        const film = {...filmData};
        film.video = `f`.repeat(150);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });
    });

    describe(`"previewVideo" property`, () => {
      it(`When POST /films endpoint without property status code should be 400`, () => {
        const film = {...filmData};
        delete film.previewVideo;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with too short property status code should be 400`, () => {
        const film = {...filmData};
        film.previewVideo = `f`;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with min length property status code should be 201`, () => {
        const film = {...filmData};
        film.previewVideo = `f`.repeat(2);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });

      it(`When POST /films endpoint with too long property status code should be 400`, () => {
        const film = {...filmData};
        film.previewVideo = `f`.repeat(151);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with max length property status code should be 201`, () => {
        const film = {...filmData};
        film.previewVideo = `f`.repeat(150);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });
    });

    describe(`"description" property`, () => {
      it(`When POST /films endpoint without property status code should be 400`, () => {
        const film = {...filmData};
        delete film.description;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with too short property status code should be 400`, () => {
        const film = {...filmData};
        film.description = `f`.repeat(19);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with min length property status code should be 201`, () => {
        const film = {...filmData};
        film.description = `f`.repeat(20);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });

      it(`When POST /films endpoint with too long property status code should be 400`, () => {
        const film = {...filmData};
        film.description = `f`.repeat(1001);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with max length property status code should be 201`, () => {
        const film = {...filmData};
        film.description = `f`.repeat(1000);
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });
    });

    describe(`"runtime" property`, () => {
      it(`When POST /films endpoint without property status code should be 400`, () => {
        const film = {...filmData};
        delete film.runtime;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with invalid property value status code should be 400`, () => {
        const film = {...filmData};
        film.runtime = null;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with negative number value status code should be 400`, () => {
        const film = {...filmData};
        film.runtime = -1;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with valid property value status code should be 201`, () => {
        const film = {...filmData};
        film.runtime = 70;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });
    });

    describe(`"release" property`, () => {
      it(`When POST /films endpoint without property status code should be 400`, () => {
        const film = {...filmData};
        delete film.release;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with invalid property value status code should be 400`, () => {
        const film = {...filmData};
        film.release = `invalid-value`;
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When POST /films endpoint with valid property value status code should be 201`, () => {
        const film = {...filmData};
        film.release = new Date().toISOString();
        return request(app.getHttpServer())
          .post(`/films`)
          .send(film)
          .expect(HttpStatus.CREATED);
      });
    });
  });

  describe('PUT', function() {
    describe(`"filmId" property`, () => {
      it(`When PUT /films/promo endpoint without property status code should be 400`, () => {
        const promoFilmState = {...promoFilmStateData};
        delete promoFilmState.filmId;
        return request(app.getHttpServer())
          .put(`/films/promo`)
          .send(promoFilmState)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When PUT /films/promo endpoint with invalid type property value status code should be 400`, () => {
        const promoFilm = {...promoFilmStateData};
        promoFilm.filmId = null;
        return request(app.getHttpServer())
          .put(`/films/promo`)
          .send(promoFilm)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When PUT /films/promo endpoint with negative property value status code should be 400`, () => {
        const promoFilm = {...promoFilmStateData};
        promoFilm.filmId = -1;
        return request(app.getHttpServer())
          .put(`/films/promo`)
          .send(promoFilm)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When PUT /films/promo endpoint with valid property status code should be 200`, () => {
        const promoFilm = {...promoFilmStateData};
        promoFilm.filmId = 2;
        return request(app.getHttpServer())
          .put(`/films/promo`)
          .send(promoFilm)
          .expect(HttpStatus.OK);
      });
    });

    describe(`"isPromo" property`, () => {
      it(`When PUT /films/promo endpoint without property status code should be 400`, () => {
        const promoFilm = {...promoFilmStateData};
        delete promoFilm.isPromo;
        return request(app.getHttpServer())
          .put(`/films/promo`)
          .send(promoFilm)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When PUT /films/promo endpoint with invalid property value status code should be 400`, () => {
        const promoFilm = {...promoFilmStateData};
        promoFilm.isPromo = null;
        return request(app.getHttpServer())
          .put(`/films/promo`)
          .send(promoFilm)
          .expect(HttpStatus.BAD_REQUEST);
      });

      it(`When PUT /films/promo endpoint with valid property value status code should be 200`, () => {
        const promoFilm = {...promoFilmStateData};
        promoFilm.isPromo = true;
        return request(app.getHttpServer())
          .put(`/films/promo`)
          .send(promoFilm)
          .expect(HttpStatus.OK);
      });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
