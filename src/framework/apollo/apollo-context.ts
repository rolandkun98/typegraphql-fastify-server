import { ApolloFastifyContextFunction } from '@as-integrations/fastify';

export interface ApolloContext {
  test: string;
}

export const apolloContextFunction: ApolloFastifyContextFunction<
  ApolloContext
> = async (request, _reply) => ({
  test: request.headers.test as string,
});
