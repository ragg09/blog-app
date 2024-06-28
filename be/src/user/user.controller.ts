import { Body, Controller, Post } from '@nestjs/common';

import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() postData: User) {
    return this.userService.createUser(postData);
    // return 'working asd';
  }
}
