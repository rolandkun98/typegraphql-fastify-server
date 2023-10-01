import { EntityManager } from 'typeorm';
import { User } from '../../typegraphql/user/user.model';
import { GetUserByIdInput } from '../../typegraphql/user/dto/get-by-id.input';

export type GetUserByIdUseCase = (input: GetUserByIdInput) => Promise<User>;

export const getUserByIdUseCaseFactory =
  ({ entityManager }: { entityManager: EntityManager }): GetUserByIdUseCase =>
  async (input) => {
    const user = await entityManager
      .getRepository(User)
      .findOne({ where: { id: input.id } });
    if (!user) {
      throw new Error('The user does not exist!');
    }
    return user;
  };