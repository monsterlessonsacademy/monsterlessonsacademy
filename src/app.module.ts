import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthMiddleware} from './user/middlewares/auth.middleware';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/app')],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL
    })
  }
}
