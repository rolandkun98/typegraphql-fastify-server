import { DataSource } from 'typeorm';
import { Entities } from '../../typegraphql/entities';
import { config } from '../../config';
import { ApplicationEnvironments } from '../../enums/application-environments';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.DATABASE.HOST,
  port: config.DATABASE.PORT,
  username: config.DATABASE.USERNAME,
  password: config.DATABASE.PASSWORD,
  database: config.DATABASE.NAME,
  synchronize: config.ENVIRONMENT === ApplicationEnvironments.DEVELOPER,
  logging: true,
  entities: [...Entities],
  migrations: ['src/migrations/*.ts'],
});
