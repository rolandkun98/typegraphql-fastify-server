import { ApolloServer, BaseContext } from '@apollo/server';
import { buildSchema } from 'type-graphql';
import { BaseResolver } from '../graphql/base-resolver';

export const createApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [BaseResolver],
  });

  const apolloServer = new ApolloServer<BaseContext>({
    schema,
  });

  return apolloServer;
};
