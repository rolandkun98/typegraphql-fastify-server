import { EntityManager } from 'typeorm';
import { User } from '../../typegraphql/user/user.model';

export type GetAllUserUseCase = () => Promise<User[]>;

export const getAllUserUseCaseFactory =
  ({ entityManager }: { entityManager: EntityManager }): GetAllUserUseCase =>
  async () => {
    const users = await entityManager.getRepository(User).find();
    return users;
  };
