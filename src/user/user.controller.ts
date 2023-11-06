import {Body, Controller, Get, HttpException, HttpStatus, Post, Request} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './dto/createUser.dto';
import {UserResponseType} from './types/userResponse.type';
import {LoginDto} from './dto/login.dto';
import {ExpressRequest} from './middlewares/auth.middleware';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async createUser(
    @Body() createUserDto: CreateUserDto
  ): Promise<UserResponseType> {
    const user = await this.userService.createUser(createUserDto)
    return this.userService.buildUserResponse(user)
  }

  @Post('users/login')
  async login(
    @Body() loginDto: LoginDto
  ): Promise<UserResponseType> {
    const user = await this.userService.loginUser(loginDto)
    return this.userService.buildUserResponse(user)
  }

  @Get('user')
  async currentUser(@Request() request: ExpressRequest): Promise<UserResponseType> {
    if (!request.user) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    }
    return this.userService.buildUserResponse(request.user)
  }
}
