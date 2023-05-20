import { DataSource } from 'typeorm';
import { createUserUseCaseFactory } from './user/create-user.use-case';
import { getAllUserUseCaseFactory } from './user/get-all-user.use-case';

export const useCasesFactory = ({ connection }: { connection: DataSource }) => {
  const createUserUseCase = createUserUseCaseFactory({ connection });
  const getAllUserUseCase = getAllUserUseCaseFactory({ connection });

  return {
    createUserUseCase,
    getAllUserUseCase,
  };
};

export type TUseCases = ReturnType<typeof useCasesFactory>;
