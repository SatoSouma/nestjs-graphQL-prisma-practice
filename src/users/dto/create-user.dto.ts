import { IsString, MinLength, MaxLength } from 'class-validator'

export class CreateUserDto {
  readonly username!: string
  readonly password!: string
}
