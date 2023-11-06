import {IsEmail, IsNotEmpty} from "class-validator"

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string
  @IsNotEmpty()
  readonly password: string
}
