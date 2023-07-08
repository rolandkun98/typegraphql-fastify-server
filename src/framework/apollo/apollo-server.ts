import { ApolloServer } from '@apollo/server';
import { buildSchema } from 'type-graphql';
import { TResolvers } from '../../typegraphql/resolvers';
import { ApolloContext } from './apollo-context';

export const createApolloServer = async ({
  resolvers,
}: {
  resolvers: TResolvers;
}) => {
  const schema = await buildSchema({
    resolvers: [resolvers.UserResolver],
  });

  const apolloServer = new ApolloServer<ApolloContext>({
    schema,
  });

  return apolloServer;
};

export type TApolloServer = ApolloServer<ApolloContext>;
