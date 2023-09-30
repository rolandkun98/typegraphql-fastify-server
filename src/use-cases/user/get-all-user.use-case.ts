import { DataSource, EntityManager } from 'typeorm';
import { User } from '../../typegraphql/user/user.model';

type GetAllUserUseCaseOutput = User[];

export type GetAllUserUseCase = () => Promise<GetAllUserUseCaseOutput>;

export const getAllUserUseCaseFactory =
  ({ entityManager }: { entityManager: EntityManager }): GetAllUserUseCase =>
  async () => {
    const users = await entityManager.getRepository(User).find();
    return users;
  };
