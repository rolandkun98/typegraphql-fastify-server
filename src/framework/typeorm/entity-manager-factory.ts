import { Logger } from 'pino';
import { DataSource, EntityManager } from 'typeorm';

export const entityManagerFactory = async ({
  logger,
  dataSource,
}: {
  logger: Logger;
  dataSource: DataSource;
}): Promise<EntityManager> => {
  const typeormLogger = logger.child({ type: 'typeorm' });

  try {
    await dataSource.initialize();
    typeormLogger.info('Data Source has been initialized!');
  } catch (err) {
    typeormLogger.error('Data Source initialization error');
    throw new Error(err as string);
  }

  return dataSource.manager;
};
