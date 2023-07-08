import { DataSource } from 'typeorm';
import { User } from '../../typegraphql/user/user.model';

interface CreateUserUseCaseInput {
  firstName: string;
  lastName: string;
  email: string;
}

type CreateUserUseCaseOutput = User;

export type CreateUserUseCase = (
  input: CreateUserUseCaseInput
) => Promise<CreateUserUseCaseOutput>;

export const createUserUseCaseFactory =
  ({ connection }: { connection: DataSource }): CreateUserUseCase =>
  async (input) => {
    const newUser = await connection.getRepository(User).create(input).save();
    return newUser;
  };
