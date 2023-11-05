import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {CreateUserDto} from "./dto/createUser.dto";
import {UserEntity} from "./user.entity";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {compare} from 'bcrypt';
import {LoginDto} from "./dto/login.dto";
import {UserResponseType} from "./types/userResponse.type";
import {sign} from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserEntity.name) private userModel: Model<UserEntity>) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    console.log('createUserDto', createUserDto)
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  async loginUser(loginDto: LoginDto): Promise<UserEntity> {
    console.log('loginDto', loginDto)
    const user = await this.userModel.findOne({email: loginDto.email}).select('+password');

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const isPasswordCorrect = await compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new HttpException('Incorrect password', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    return user
  }

  buildUserResponse(userEntity: UserEntity): UserResponseType {
    return {
      username: userEntity.username,
      email: userEntity.email,
      token: this.generateJwt(userEntity),
    }
  }


  generateJwt(user: UserEntity): string {
    return sign(
      {
        email: user.email,
      },
      'JWT_SECRET',
    );
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return this.userModel.findOne({email});
  }
}
