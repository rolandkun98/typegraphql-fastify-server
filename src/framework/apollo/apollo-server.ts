import { ApolloServer, BaseContext } from '@apollo/server';
import { buildSchema } from 'type-graphql';
import { TResolvers } from '../../typegraphql/resolvers';

export const createApolloServer = async ({
  resolvers,
}: {
  resolvers: TResolvers;
}) => {
  const schema = await buildSchema({
    resolvers: [resolvers.UserResolver],
  });

  const apolloServer = new ApolloServer<BaseContext>({
    schema,
  });

  return apolloServer;
};
