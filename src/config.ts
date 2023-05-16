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
});

export const config = configObject.getProperties();
export type Config = typeof config;
