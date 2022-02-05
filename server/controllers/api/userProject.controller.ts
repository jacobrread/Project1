import { Controller, Get } from '@nestjs/common';

@Controller()
export class userProjectsController {
  @Get('/userProjects')
  public index() {
    return { message: 'Finish userProjects controller' };
  }
}
