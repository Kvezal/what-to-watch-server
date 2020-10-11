import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import {
  CommentsModule,
  FavoriteModule,
  FilmsModule,
  LoginModule,
} from "./routes";


@Module({
  imports: [
    CommentsModule,
    FavoriteModule,
    FilmsModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
