import 'reflect-metadata';
import { FastifyInstance } from 'fastify';
import { createFastifyApp } from './framework/fastify/fastify-app';
import { createApolloServer } from './framework/apollo/apollo-server';
import { pino } from 'pino';
import { initConnection } from './framework/typeorm/init-connection';
import { useCasesFactory } from './use-cases/use-cases';
import { resolversFactory } from './typegraphql/resolvers';

export const createApp = async (): Promise<FastifyInstance> => {
  const logger = pino();

  const connection = initConnection({ logger });
  const useCases = useCasesFactory({ connection });
  const resolvers = resolversFactory({ useCases });

  const apolloServer = await createApolloServer({ resolvers });
  const fastifyApp = await createFastifyApp({ apolloServer, logger });

  return fastifyApp;
};
