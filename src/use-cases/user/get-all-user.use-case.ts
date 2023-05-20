import { DataSource } from 'typeorm';
import { User } from '../../typegraphql/user/user.model';

type GetAllUserUseCaseOutput = User[];

export type GetAllUserUseCase = () => Promise<GetAllUserUseCaseOutput>;

export const getAllUserUseCaseFactory =
  ({ connection }: { connection: DataSource }): GetAllUserUseCase =>
  async () => {
    const users = await connection.getRepository(User).find();
    return users;
  };
