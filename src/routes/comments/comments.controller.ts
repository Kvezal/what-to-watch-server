import { Controller } from '@nestjs/common';

import { ERouteName } from 'enums';


@Controller(ERouteName.COMMENTS)
export class CommentsController {}
