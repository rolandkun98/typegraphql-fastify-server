import { TUseCases } from '../use-cases/use-cases';
import { eventResolverFactory } from './event/event.resolver';
import { userResolverFactory } from './user/user.resolver';

export const resolversFactory = ({ useCases }: { useCases: TUseCases }) => {
  const UserResolver = userResolverFactory({
    createUserUseCase: useCases.createUserUseCase,
    getAllUserUseCase: useCases.getAllUserUseCase,
    getUserByIdUseCase: useCases.getUserByIdUseCase,
  });

  const EventResolver = eventResolverFactory({
    createEventUseCase: useCases.createEventUseCase,
  });

  return {
    UserResolver,
    EventResolver,
  };
};

export type TResolvers = ReturnType<typeof resolversFactory>;
