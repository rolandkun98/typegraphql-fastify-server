import {
  Resolver,
  Mutation,
  Arg,
  InputType,
  Field,
  Query,
  Ctx,
} from 'type-graphql';
import { User } from './user.model';
import { CreateUserUseCase } from '../../use-cases/user/create-user.use-case';
import { GetAllUserUseCase } from '../../use-cases/user/get-all-user.use-case';
import { ApolloContext } from '../../framework/apollo/apollo-context';

@InputType()
class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;
}

export const userResolverFactory = ({
  createUserUseCase,
  getAllUserUseCase,
}: {
  createUserUseCase: CreateUserUseCase;
  getAllUserUseCase: GetAllUserUseCase;
}) => {
  @Resolver(User)
  class UserResolver {
    @Mutation(() => User)
    async createUser(
      @Arg('args') args: CreateUserInput,
      @Ctx() ctx: ApolloContext
    ): Promise<User> {
      return await createUserUseCase(args);
    }

    @Query(() => [User])
    async getAllUser(): Promise<User[]> {
      return await getAllUserUseCase();
    }
  }

  return UserResolver;
};

export type TUserResolver = ReturnType<typeof userResolverFactory>;
