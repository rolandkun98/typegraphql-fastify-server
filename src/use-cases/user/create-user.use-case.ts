import { EntityManager } from 'typeorm';
import { User } from '../../typegraphql/user/user.model';
import { CreateUserInput } from '../../typegraphql/user/dto/create.input';
import { UseCase } from '../use-case.type';
import { ForbiddenError } from 'type-graphql';
import { UserRole } from '../../enums/user-roles';

export type CreateUserUseCase = UseCase<CreateUserInput, User>;

export const createUserUseCaseFactory =
  ({ entityManager }: { entityManager: EntityManager }): CreateUserUseCase =>
  async (input, ctx) => {
    if (ctx.role !== UserRole.ADMIN) {
      throw new ForbiddenError();
    }

    const existingUser = await entityManager
      .getRepository(User)
      .findOne({ where: { email: input.email } });
    if (existingUser) {
      throw new Error('The email address is already used');
    }

    const newUser = await entityManager
      .getRepository(User)
      .create(input)
      .save();
    return newUser;
  };
