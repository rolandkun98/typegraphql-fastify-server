import { Field, ID, InputType } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class GetUserByIdInput {
  @IsNotEmpty()
  @Field((type) => ID)
  id: string;
}
