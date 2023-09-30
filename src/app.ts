import { FastifyInstance } from 'fastify';
import { createFastifyApp } from './framework/fastify/fastify-app';
import { createApolloServer } from './framework/apollo/apollo-server';
import { pino } from 'pino';
import { entityManagerFactory } from './framework/typeorm/entity-manager-factory';
import { useCasesFactory } from './use-cases/use-cases';
import { resolversFactory } from './typegraphql/resolvers';
import { appDataSource } from './framework/typeorm/data-source';

export const createApp = async (): Promise<FastifyInstance> => {
  const logger = pino();

  const entityManager = await entityManagerFactory({
    logger,
    dataSource: appDataSource,
  });
  const useCases = useCasesFactory({ entityManager });
  const resolvers = resolversFactory({ useCases });

  const apolloServer = await createApolloServer({ resolvers });
  const fastifyApp = await createFastifyApp({ apolloServer, logger });

  return fastifyApp;
};
