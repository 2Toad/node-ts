import config from "./utils/config";
import logger from "./utils/logger";

class App {
  constructor() {
    logger.info("App created");
  }

  sayHello() {
    logger.info("Hello World!");
    logger.info(`HELLOW_WORLD = "${config.app.helloWorld}"`);
  }
}

export default new App();
