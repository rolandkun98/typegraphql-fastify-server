import { Field, InputType } from 'type-graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @Field()
  firstName: string;

  @IsNotEmpty()
  @Field()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;
}
