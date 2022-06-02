import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  create(@Body() createUser: CreateUserDto) {
    console.log(createUser)
    return this.usersService.create(createUser)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }
}
