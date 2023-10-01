import { ApolloFastifyContextFunction } from '@as-integrations/fastify';
import { UserRole } from '../../enums/user-roles';

export interface ApolloContext {
  role: UserRole;
}

export const apolloContextFunction: ApolloFastifyContextFunction<
  ApolloContext
> = async (request, _reply) => ({
  role: request.headers.role as UserRole,
});
