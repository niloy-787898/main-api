import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  age?: number;
}
