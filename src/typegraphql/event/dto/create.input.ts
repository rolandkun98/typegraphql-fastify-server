import { Field, ID, InputType } from 'type-graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateEventInput {
  @IsNotEmpty()
  @Field()
  title: string;

  @IsNotEmpty()
  @MaxLength(300)
  @Field()
  description: string;

  @IsNotEmpty()
  @Field(() => ID)
  createdById: string;

  @IsNotEmpty()
  @Field()
  startingAt: Date;

  @IsNotEmpty()
  @Field()
  finishingAt: Date;
}
