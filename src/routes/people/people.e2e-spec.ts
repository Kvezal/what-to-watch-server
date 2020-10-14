import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from "supertest";

import { PeopleModule } from './people.module';
import { PeopleService } from './people.service';


const personData = {
  firstname: `Firstname`,
  lastname: `Lastname`,
  type: 1,
};

describe(`People API end-point`, () => {
  let app: INestApplication;
  const peopleService = {
    login: () => `test`,
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PeopleModule],
    })
      .overrideProvider(PeopleService)
      .useValue(peopleService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe(`"firstname" property`, () => {
    it(`When POST /people endpoint without property status code should be 400`, () => {
      const person = {...personData};
      delete person.firstname;
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /people endpoint with too short property status code should be 400`, () => {
      const person = {...personData};
      person.firstname = `f`;
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /people endpoint with min length property status code should be 201`, () => {
      const person = {...personData};
      person.firstname = `f`.repeat(2);
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.CREATED);
    });

    it(`When POST /people endpoint with too long property status code should be 400`, () => {
      const person = {...personData};
      person.firstname = `f`.repeat(51);
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /people endpoint with max length property status code should be 201`, () => {
      const person = {...personData};
      person.firstname = `f`.repeat(50);
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.CREATED);
    });
  });

  describe(`"lastname" property`, () => {
    it(`When POST /people endpoint without property status code should be 400`, () => {
      const person = {...personData};
      delete person.lastname;
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /people endpoint with too short property status code should be 400`, () => {
      const person = {...personData};
      person.lastname = `l`;
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /people endpoint with min length property status code should be 201`, () => {
      const person = {...personData};
      person.lastname = `l`.repeat(2);
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.CREATED);
    });

    it(`When POST /people endpoint with too long property status code should be 400`, () => {
      const person = {...personData};
      person.lastname = `l`.repeat(51);
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /people endpoint with max length property status code should be 201`, () => {
      const person = {...personData};
      person.lastname = `l`.repeat(50);
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.CREATED);
    });
  });

  describe(`"type" property`, () => {
    it(`When POST /people endpoint without property status code should be 400`, () => {
      const person = {...personData};
      delete person.type;
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /people endpoint with valid property status code should be 201`, () => {
      const person = {...personData};
      person.type = 2;
      return request(app.getHttpServer())
        .post(`/people`)
        .send(person)
        .expect(HttpStatus.CREATED);
    });
  });

  afterAll(async () => {
    await app.close();
  })
});
