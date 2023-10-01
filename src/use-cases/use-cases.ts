import { EntityManager } from 'typeorm';
import { createUserUseCaseFactory } from './user/create-user.use-case';
import { getAllUserUseCaseFactory } from './user/get-all-user.use-case';
import { getUserByIdUseCaseFactory } from './user/get-user-by-id.use-case';

export const useCasesFactory = ({
  entityManager,
}: {
  entityManager: EntityManager;
}) => {
  const createUserUseCase = createUserUseCaseFactory({ entityManager });
  const getAllUserUseCase = getAllUserUseCaseFactory({ entityManager });
  const getUserByIdUseCase = getUserByIdUseCaseFactory({ entityManager });

  return {
    createUserUseCase,
    getAllUserUseCase,
    getUserByIdUseCase,
  };
};

export type TUseCases = ReturnType<typeof useCasesFactory>;
