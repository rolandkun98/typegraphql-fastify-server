import { Logger } from 'pino';
import { DataSource } from 'typeorm';
import { AppDataSource } from './data-source';

export const initConnection = ({ logger }: { logger: Logger }): DataSource => {
  const typeormLogger = logger.child({ type: 'typeorm' });

  AppDataSource.initialize()
    .then(() => {
      typeormLogger.info('Data Source has been initialized!');
    })
    .catch((err) => {
      typeormLogger.error('Error during Data Source initialization', err);
      throw new Error(err as string);
    });

  return AppDataSource;
};
