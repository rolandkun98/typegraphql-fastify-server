import { createApp } from './app';
import { config } from './config';

const startServer = async (): Promise<void> => {
  const app = await createApp();
  await app.ready();
  app.server.listen(config.PORTS.BACKEND, () => {
    console.log(`> Ready on http://localhost:${config.PORTS.BACKEND}`);
  });
};

void startServer();
