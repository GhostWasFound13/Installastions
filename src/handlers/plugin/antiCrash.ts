export default (client: manager) => {
  process.on('unhandledRejection', (reason: any, promise: any) => {
    client.logger.error('[ANTI-CRASH] unhandledRejection');
    console.log(promise, reason);
  });

  process.on('uncaughtException', (err: Error, origin: string) => {
    client.logger.error('[ANTI-CRASH] uncaughtException');
    console.log(err, origin);
  });

  process.on('uncaughtExceptionMonitor', (err: Error, origin: string) => {
    client.logger.error('[ANTI-CRASH] uncaughtExceptionMonitor');
    console.log(err, origin);
  });
};
