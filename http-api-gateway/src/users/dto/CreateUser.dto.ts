import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsOptional()
  displayname?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
