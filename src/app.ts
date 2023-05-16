import 'reflect-metadata';
import { FastifyInstance } from 'fastify';
import { createFastifyApp } from './framework/fastify/fastify-app';
import { createApolloServer } from './framework/apollo/apollo-server';

export const createApp = async (): Promise<FastifyInstance> => {
  const apolloServer = await createApolloServer();
  const fastifyApp = await createFastifyApp({ apolloServer });
  return fastifyApp;
};
