import { Resolver, Mutation, Arg, Query, Ctx } from 'type-graphql';
import { User } from './user.model';
import { CreateUserUseCase } from '../../use-cases/user/create-user.use-case';
import { GetAllUserUseCase } from '../../use-cases/user/get-all-user.use-case';
// import { ApolloContext } from '../../framework/apollo/apollo-context';
import { CreateUserInput } from './dto/create.input';
import { GetUserByIdUseCase } from '../../use-cases/user/get-user-by-id.use-case';
import { GetUserByIdInput } from './dto/get-by-id.input';

export const userResolverFactory = ({
  createUserUseCase,
  getAllUserUseCase,
  getUserByIdUseCase,
}: {
  createUserUseCase: CreateUserUseCase;
  getAllUserUseCase: GetAllUserUseCase;
  getUserByIdUseCase: GetUserByIdUseCase;
}) => {
  @Resolver(User)
  class UserResolver {
    @Mutation(() => User)
    async createUser(
      @Arg('args') args: CreateUserInput
      // @Ctx() ctx: ApolloContext
    ): Promise<User> {
      return await createUserUseCase(args);
    }

    @Query(() => [User])
    async getAllUser(): Promise<User[]> {
      return await getAllUserUseCase();
    }

    @Query(() => User)
    async getUserById(@Arg('args') args: GetUserByIdInput): Promise<User> {
      return await getUserByIdUseCase(args);
    }
  }

  return UserResolver;
};

export type TUserResolver = ReturnType<typeof userResolverFactory>;
