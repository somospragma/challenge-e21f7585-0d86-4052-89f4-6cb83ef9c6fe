import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from '../domain/user';
import { UserService } from '../application/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User): User {
    return this.userService.create(user);
  }

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.userService.findOne(id);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updatedUser: User): User {
    return this.userService.update(id, updatedUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.userService.remove(id);
  }
}