import { Controller } from '@nestjs/common';

import { ERouteName } from 'enums';


@Controller(ERouteName.FILMS)
export class FilmsController {}
