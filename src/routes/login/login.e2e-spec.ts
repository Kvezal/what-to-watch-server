import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from "supertest";

import { LoginModule } from './login.module';
import { LoginService } from './login.service';


const userLoginData = {
  email: `test@gmail.com`,
  password: `123456`,
};

describe(`Authorization API end-point`, () => {
  let app: INestApplication;
  const loginService = {
    login: () => `test`,
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [LoginModule],
    })
      .overrideProvider(LoginService)
      .useValue(loginService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`When POST /login endpoint without data status code should be 400`, () => {
    return request(app.getHttpServer())
      .post(`/login`)
      .send()
      .expect(HttpStatus.BAD_REQUEST);
  });

  describe(`"email" property`, () => {
    it(`When POST /login endpoint without property status code should be 400`, () => {
      const userLogin = {...userLoginData};
      delete userLogin.email;
      return request(app.getHttpServer())
        .post(`/login`)
        .send(userLogin)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /login endpoint with invalid property status code should be 400`, () => {
      const userLogin = {...userLoginData};
      userLogin.email = `test`;
      return request(app.getHttpServer())
        .post(`/login`)
        .send(userLogin)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /login endpoint with valid property status code should be 201`, () => {
      const userLogin = {...userLoginData};
      userLogin.email = `valid-email@gmail.com`;
      return request(app.getHttpServer())
        .post(`/login`)
        .send(userLogin)
        .expect(HttpStatus.CREATED);
    });
  });

  describe(`"password" property`, () => {
    it(`When POST /login endpoint without property status code should be 400`, () => {
      const userLogin = {...userLoginData};
      delete userLogin.password;
      return request(app.getHttpServer())
        .post(`/login`)
        .send(userLogin)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /login endpoint with too short property status code should be 400`, () => {
      const userLogin = {...userLoginData};
      userLogin.password = `p`.repeat(5);
      return request(app.getHttpServer())
        .post(`/login`)
        .send(userLogin)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it(`When POST /login endpoint with min length property status code should be 201`, () => {
      const userLogin = {...userLoginData};
      userLogin.password = `p`.repeat(6);
      return request(app.getHttpServer())
        .post(`/login`)
        .send(userLogin)
        .expect(HttpStatus.CREATED);
    });
  });

  afterAll(async () => {
    await app.close();
  })
});
