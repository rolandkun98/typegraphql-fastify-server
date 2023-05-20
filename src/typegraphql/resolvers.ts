import { TUseCases } from '../use-cases/use-cases';
import { userResolverFactory } from './user/user.resolver';

export const resolversFactory = ({ useCases }: { useCases: TUseCases }) => {
  const UserResolver = userResolverFactory({
    createUserUseCase: useCases.createUserUseCase,
    getAllUserUseCase: useCases.getAllUserUseCase,
  });

  return {
    UserResolver,
  };
};

export type TResolvers = ReturnType<typeof resolversFactory>;
