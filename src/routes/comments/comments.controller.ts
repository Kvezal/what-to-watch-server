import { Body, Controller, Post } from '@nestjs/common';

import { NewCommentDto } from 'dto';
import { ERouteName } from 'enums';
import { DtoValidationPipe } from 'pipes';


@Controller(ERouteName.COMMENTS)
export class CommentsController {
  @Post()
  create(@Body(new DtoValidationPipe()) body: NewCommentDto): NewCommentDto {
    return body;
  }
}
