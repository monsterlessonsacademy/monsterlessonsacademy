import {UserEntity} from "../user.entity";

export type UserResponseType = Omit<UserEntity, 'password'> & {token: string}
