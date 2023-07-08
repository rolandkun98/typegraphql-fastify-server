import fastify from 'fastify';
import cors from '@fastify/cors';
import { config } from '../../config';
import {
  fastifyApolloDrainPlugin,
  fastifyApolloHandler,
} from '@as-integrations/fastify';
import { Logger } from 'pino';
import { TApolloServer } from '../apollo/apollo-server';
import { apolloContextFunction } from '../apollo/apollo-context';

export const createFastifyApp = async ({
  apolloServer,
  logger,
}: {
  apolloServer: TApolloServer;
  logger: Logger;
}) => {
  const fastifyApp = fastify({
    logger: logger.child({ type: 'fastify' }),
  });

  apolloServer.addPlugin(fastifyApolloDrainPlugin(fastifyApp));

  await apolloServer.start();

  await fastifyApp.register(cors, {
    origin: config.URLS.FRONTEND,
  });

  fastifyApp.route({
    url: '/api/graphql',
    method: ['POST', 'OPTIONS', 'GET'],
    handler: fastifyApolloHandler(apolloServer, {
      context: apolloContextFunction,
    }),
  });

  return fastifyApp;
};
