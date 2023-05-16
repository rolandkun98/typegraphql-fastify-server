import fastify from 'fastify';
import cors from '@fastify/cors';
import { config } from '../../config';
import { ApolloServer } from '@apollo/server';
import {
  fastifyApolloDrainPlugin,
  fastifyApolloHandler,
} from '@as-integrations/fastify';

export const createFastifyApp = async ({
  apolloServer,
}: {
  apolloServer: ApolloServer;
}) => {
  const fastifyApp = fastify({
    logger: true,
  });

  apolloServer.addPlugin(fastifyApolloDrainPlugin(fastifyApp));

  await apolloServer.start();

  await fastifyApp.register(cors, {
    origin: config.URLS.FRONTEND,
  });

  fastifyApp.route({
    url: '/api/graphql',
    method: ['POST', 'OPTIONS', 'GET'],
    handler: fastifyApolloHandler(apolloServer),
  });

  return fastifyApp;
};
