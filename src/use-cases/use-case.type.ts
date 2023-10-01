import { ApolloContext } from '../framework/apollo/apollo-context';

export type UseCase<TInput, TOutput> = (
  input: TInput,
  ctx: ApolloContext
) => Promise<TOutput>;
