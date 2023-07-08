import convict from 'convict';
import dotenv from 'dotenv';

dotenv.config();

const configObject = convict({
  URLS: {
    FRONTEND: {
      doc: 'Frontend url',
      format: String,
      default: '',
      env: 'FRONTEND_URL',
    },
  },
  PORTS: {
    BACKEND: {
      doc: 'Backend server port',
      format: Number,
      default: 4200,
      env: 'SERVER_PORT',
    },
  },
  ENVIRONMENT: {
    doc: 'Application environment',
    format: String,
    default: 'developer',
    env: 'ENVIRONMENT',
  },
  DATABASE: {
    HOST: {
      doc: 'Database host',
      format: String,
      default: '',
      env: 'DATABASE_HOST',
    },
    PORT: {
      doc: 'Database port',
      format: Number,
      default: 5432,
      env: 'DATABASE_PORT',
    },
    USERNAME: {
      doc: 'Database username',
      format: String,
      default: '',
      env: 'DATABASE_USERNAME',
    },
    PASSWORD: {
      doc: 'Database password',
      format: String,
      default: '',
      env: 'DATABASE_PASSWORD',
    },
    NAME: {
      doc: 'Database name',
      format: String,
      default: '',
      env: 'DATABASE_NAME',
    },
    SYNCHRONIZE: {
      doc: 'Database schema should be auto created on every application launch.',
      format: Boolean,
      default: false,
      env: 'DATABASE_SYNCHRONIZE',
    },
  },
});

export const config = configObject.getProperties();
export type Config = typeof config;
