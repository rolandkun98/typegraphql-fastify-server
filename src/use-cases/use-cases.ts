import { EntityManager } from 'typeorm';
import { createUserUseCaseFactory } from './user/create-user.use-case';
import { getAllUserUseCaseFactory } from './user/get-all-user.use-case';

export const useCasesFactory = ({
  entityManager,
}: {
  entityManager: EntityManager;
}) => {
  const createUserUseCase = createUserUseCaseFactory({ entityManager });
  const getAllUserUseCase = getAllUserUseCaseFactory({ entityManager });

  return {
    createUserUseCase,
    getAllUserUseCase,
  };
};

export type TUseCases = ReturnType<typeof useCasesFactory>;
