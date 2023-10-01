import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { ApolloContext } from '../../framework/apollo/apollo-context';
import { CreateEventUseCase } from '../../use-cases/event/create-event.use-case';
import { Event } from './event.model';
import { CreateEventInput } from './dto/create.input';

export const eventResolverFactory = ({
  createEventUseCase,
}: {
  createEventUseCase: CreateEventUseCase;
}) => {
  @Resolver(Event)
  class EventResolver {
    @Mutation(() => Event)
    async createEvent(
      @Arg('args') args: CreateEventInput,
      @Ctx() ctx: ApolloContext
    ): Promise<Event> {
      return await createEventUseCase(args, ctx);
    }
  }

  return EventResolver;
};

export type TEventResolver = ReturnType<typeof eventResolverFactory>;
