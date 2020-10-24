import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { NewCommentDto } from 'dto';
import { ERouteName } from 'enums';


@Controller(ERouteName.COMMENTS)
export class CommentsController {
  @Post()
  create(@Body(ValidationPipe) body: NewCommentDto): NewCommentDto {
    return body;
  }
}
