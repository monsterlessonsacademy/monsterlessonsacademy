
import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {UserService} from './user.service';
import {UserEntity, UserEntitySchema} from './user.entity';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: UserEntity.name, schema: UserEntitySchema}])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
