import {Injectable, NestMiddleware} from '@nestjs/common';
import {NextFunction, Response} from 'express';
import {verify} from 'jsonwebtoken';
import {UserService} from '../user.service';
import {UserEntity} from '../user.entity';

export interface ExpressRequest extends Request {
  user?: UserEntity
}


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, _: Response, next: NextFunction) {
    if (!req.headers['authorization']) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers['authorization'].split(' ')[1];

    try {
      const decode = verify(token, 'JWT_SECRET') as {email: string};
      const user = await this.userService.findByEmail(decode.email);
      req.user = user;
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}
