import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { RegistrationModule } from './registration.module';
import { RegistrationService } from './registration.service';


const userData = {
  firstname: `Firstname`,
  lastname: `Lastname`,
  avatar: `avatar.png`,
  email: `test@mail.ru`,
  password: `123456`,
};

describe(`Registration API end-point`, () => {
  let app: INestApplication;
  const registrationService = {
    create: () => `test`,
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [RegistrationModule],
    })
      .overrideProvider(RegistrationService)
      .useValue(registrationService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`When POST /registration endpoint without data status code should be 400`, () => {
    return request(app.getHttpServer())
      .post(`/registration`)
      .expect(HttpStatus.BAD_REQUEST);
  });

  describe(`"firstname" property`, () => {
    it(`When POST /registration endpoint without property status code should be 400`, () => {
      const user = {...userData};
      delete user.firstname;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with too short property status code should be 400`, () => {
      const user = {...userData};
      user.firstname = `f`;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with min length property status code should be 201`, () => {
      const user = {...userData};
      user.firstname = `f`.repeat(2);
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.CREATED);
    });

    it(`When POST /registration endpoint with too long property status code should be 400`, () => {
      const user = {...userData};
      user.firstname = `f`.repeat(51);
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with max length property status code should be 201`, () => {
      const user = {...userData};
      user.firstname = `f`.repeat(50);
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.CREATED);
    });
  });

  describe(`"lastname" property`, () => {
    it(`When POST /registration endpoint without property status code should be 400`, () => {
      const user = {...userData};
      delete user.lastname;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with too short property status code should be 400`, () => {
      const user = {...userData};
      user.lastname = `l`;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with min length property status code should be 201`, () => {
      const user = {...userData};
      user.lastname = `l`.repeat(2);
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.CREATED);
    });

    it(`When POST /registration endpoint with too long property status code should be 400`, () => {
      const user = {...userData};
      user.lastname = `l`.repeat(51);
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with max length property status code should be 201`, () => {
      const user = {...userData};
      user.lastname = `l`.repeat(50);
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.CREATED);
    });
  });

  describe(`"email" property`, () => {
    it(`When POST /registration endpoint without property status code should be 400`, () => {
      const user = {...userData};
      delete user.email;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with invalid property status code should be 400`, () => {
      const user = {...userData};
      user.email = `test`;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with valid property status code should be 201`, () => {
      const user = {...userData};
      user.email = `valid-email@gmail.com`;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.CREATED);
    });
  });

  describe(`"avatar" property`, () => {
    it(`When POST /registration endpoint without property status code should be 201`, () => {
      const user = {...userData};
      delete user.avatar;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.CREATED);
    });

    it(`When POST /registration endpoint with loo long property status code should be 400`, () => {
      const user = {...userData};
      user.avatar = `a`.repeat(147) + `.png`;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with max length property status code should be 201`, () => {
      const user = {...userData};
      user.avatar = `a`.repeat(146) + `.png`;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.CREATED);
    });

    it(`When POST /registration endpoint with invalid extension property status code should be 400`, () => {
      const user = {...userData};
      user.avatar = `test.js`;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it.each([`jpg`, `png`])(`When POST /registration endpoint with %p extension property status code should be 201`, (extension) => {
      const user = {...userData};
      user.avatar = `test.${extension}`;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.CREATED);
    });
  });

  describe(`"password" property`, () => {
    it(`When POST /registration endpoint without property status code should be 400`, () => {
      const user = {...userData};
      delete user.password;
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with too short property status code should be 400`, () => {
      const user = {...userData};
      user.password = `p`.repeat(5);
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /registration endpoint with min length property status code should be 201`, () => {
      const user = {...userData};
      user.password = `p`.repeat(6);
      return request(app.getHttpServer())
        .post(`/registration`)
        .send(user)
        .expect(HttpStatus.CREATED);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
