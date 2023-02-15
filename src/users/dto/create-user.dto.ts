import { ApiProperty } from '@nestjs/swagger/dist';
import { MaxLength } from 'class-validator';

export class CreateUserDto {
  @MaxLength(10)
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  age?: number;
}
