import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { CommentsModule } from './comments.module';
import { CommentsService } from './comments.service';


const commentData = {
  text: `t`.repeat(30),
  rating: 4,
  filmId: 45,
};

describe(`Comments API end-point`, () => {
  let app: INestApplication;
  const commentService = {
    create: () => `test`,
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CommentsModule],
    })
      .overrideProvider(CommentsService)
      .useValue(commentService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe(`"text" property`, () => {
    it(`When POST /comments endpoint without property status code should be 400`, () => {
      const comment = {...commentData};
      delete comment.text;
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /comments endpoint with too short property status code should be 400`, () => {
      const comment = {...commentData};
      comment.text = `t`.repeat(19);
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /comments endpoint with min length property status code should be 201`, () => {
      const comment = {...commentData};
      comment.text = `t`.repeat(20);
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.CREATED);
    });

    it(`When POST /comments endpoint with too long property status code should be 400`, () => {
      const comment = {...commentData};
      comment.text = `f`.repeat(1001);
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /comments endpoint with max length property status code should be 201`, () => {
      const comment = {...commentData};
      comment.text = `f`.repeat(1000);
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.CREATED);
    });
  });

  describe(`"rating" property`, () => {
    it(`When POST /comments endpoint without property status code should be 400`, () => {
      const comment = {...commentData};
      delete comment.rating;
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /comments endpoint with too less value property status code should be 400`, () => {
      const comment = {...commentData};
      comment.rating = 0;
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /comments endpoint with min available value property status code should be 201`, () => {
      const comment = {...commentData};
      comment.rating = 1;
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.CREATED);
    });

    it(`When POST /comments endpoint with too big value property status code should be 400`, () => {
      const comment = {...commentData};
      comment.rating = 6;
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /comments endpoint with max available value property status code should be 201`, () => {
      const comment = {...commentData};
      comment.rating = 5;
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.CREATED);
    });
  });

  describe(`"filmId" property`, () => {
    it(`When POST /comments endpoint without property status code should be 400`, () => {
      const comment = {...commentData};
      delete comment.filmId;
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /comments endpoint with invalid type property value status code should be 400`, () => {
      const comment = {...commentData};
      comment.filmId = null;
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /comments endpoint with negative property value status code should be 400`, () => {
      const comment = {...commentData};
      comment.filmId = -1;
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /comments endpoint with valid property status code should be 201`, () => {
      const comment = {...commentData};
      comment.filmId = 2;
      return request(app.getHttpServer())
        .post(`/comments`)
        .send(comment)
        .expect(HttpStatus.CREATED);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
