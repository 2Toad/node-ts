import dotenv from "dotenv";
import path from "path";
import Joi from "joi";

dotenv.config({ path: path.join(path.resolve(), ".env") });

// Define the schema for our configuration
const schema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid("local", "development", "production").required(),
    HELLO_WORLD: Joi.string(),
    LOGGER_SLACK_WEBHOOK: Joi.string(),
    LOGGER_SLACK_LEVEL: Joi.string().default("error"),
  })
  .unknown();

// Validate our config schema against available environment variables, and set defaults if the
// environment variable doesn't exist
const { value: envVars, error } = schema.prefs({ errors: { label: "key" } }).validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// Create a config object using environment variables defaults from the schema
const config = {
  env: envVars.NODE_ENV,
  app: {
    helloWorld: envVars.HELLO_WORLD,
  },
  logger: {
    slack: {
      webhook: envVars.LOGGER_SLACK_WEBHOOK,
      level: envVars.LOGGER_SLACK_LEVEL,
    },
  },
};

export default config;
