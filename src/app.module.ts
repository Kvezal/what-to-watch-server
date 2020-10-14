import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import {
  CommentsModule,
  FavoriteModule,
  FilmsModule,
  GenresModule,
  LoginModule,
  RegistrationModule,
} from "./routes";


@Module({
  imports: [
    CommentsModule,
    FavoriteModule,
    FilmsModule,
    GenresModule,
    LoginModule,
    RegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
