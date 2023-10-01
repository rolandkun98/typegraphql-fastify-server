import { EntityManager } from 'typeorm';
import { User } from '../../typegraphql/user/user.model';
import { CreateUserInput } from '../../typegraphql/user/dto/create.input';

export type CreateUserUseCase = (input: CreateUserInput) => Promise<User>;

export const createUserUseCaseFactory =
  ({ entityManager }: { entityManager: EntityManager }): CreateUserUseCase =>
  async (input) => {
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
