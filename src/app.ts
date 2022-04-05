import config from "./utils/config";
import logger from "./utils/logger";

class App {
  constructor() {
    logger.debug("App created");
  }

  sayHello(): string {
    logger.info("Hello World!");
    logger.info(`HELLOW_WORLD = "${config.app.helloWorld}"`);
    return config.app.helloWorld;
  }
}

export default new App();
