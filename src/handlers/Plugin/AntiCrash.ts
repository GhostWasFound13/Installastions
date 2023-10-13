import { Manager } from "../manager.js";


export default (client: manager) => {
  process.on('unhandledRejection', (reason, promise) => {
    client.logger.error('[ANTI-CRASH] unhandledRejection');
    console.log(promise, reason);
  });

  process.on('uncaughtException', (err, origin) => {
    client.logger.error('[ANTI-CRASH] uncaughtException');
    console.log(err, origin);
  });

  process.on('uncaughtExceptionMonitor', (err, origin) => {
    client.logger.error('[ANTI-CRASH] uncaughtExceptionMonitor');
    console.log(err, origin);
  });
};
