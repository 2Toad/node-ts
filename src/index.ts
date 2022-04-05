import logger from "./utils/logger";
import app from "./app";

const init = async () => {
  // Log unhandled exceptions
  ["uncaughtException", "unhandledRejection"].forEach((event) => {
    process.on(event, (error) => logger.error(error));
  });

  // Exit gracefully when a shutdown signal is received
  ["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) => {
    process.on(signal, async () => {
      logger.info(`${signal} received: shutting down...`);

      // TODO: perform cleanup prior to shutdown here (e.g., close DB connection)

      process.exit(0);
    });
  });

  // TODO: initialize your app here (e.g., create DB connection)

  app.sayHello();
};

init();
