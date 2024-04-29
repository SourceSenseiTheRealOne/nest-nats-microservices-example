import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  username: string;

  displayname?: string;

  email: string;
}
