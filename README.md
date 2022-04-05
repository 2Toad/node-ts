# Node TypeScript Boilerplate

Opinionated boilerplate for a Node.js TypeScript app

## Features

- ES Modules (ECMAScript)
- No transpilers

### Tech Stack

- Logging: [winston](https://github.com/winstonjs/winston) ([Slack integration](winston-slack-webhook-transport))
- Config: [dotenv](https://github.com/motdotla/dotenv)
- Linting: [ESLint](https://eslint.org/) ([Airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base))
- Formatting: [Prettier](https://prettier.io/) / [EditorConfig](https://editorconfig.org/)
- Testing: [Jest](https://jestjs.io/)
- Git Hooks: [husky](https://github.com/typicode/husky) / [lint-staged](https://github.com/okonet/lint-staged)

## Getting Started

### Prerequisites

- Node ([v16.14.2](https://nodejs.org))

### Source Code

1. Clone the repo
2. Set Git Hooks permissions: `sudo chmod -R +x .husky`
3. Complete steps in: Appendix > Local Development > [Setup](#setup)
4. Use required Node.js: `nvm use`
5. Install dependencies: `npm i`
6. Create config: `cp .env-template .env`
7. Change your .env config file values (see Appendix > [Config](#config))

### Development

1. Use required Node.js: `nvm use`
2. Start app in watch mode: `npm run local`

>When file changes are detected, the app will automatically rebuild/restart

## Appendix

### Local Development

#### Setup

1. Install nvm: https://github.com/nvm-sh/nvm
2. Install the Node.js version required by this app: `nvm install`
   1. NVM will determine the required Node version using the .nvmrc file
   2. NVM will install the required Node version if it isn't installed
   3. NVM will set your current Node version to the one required

#### Git Hooks

- pre-commit: running `git commit` will trigger `npm run lint:staged` which will lint all files currently staged in Git. If linting fails, the commit will be cancelled
- post-commit: running `git commit` will trigger `git status` after the commit completes

### Config
All the config options used by this app:

#### App
| Environment Variable | Type | Description |
|---|---|---|
| HELLO_WORLD | string | The env value printed in Hello World! |

#### Logging
| Environment Variable | Type | Description |
|---|---|---|
| LOGGER_SLACK_WEBHOOK | string | Webhook URL for logging to Slack (see Appendix > Logging > [Slack](#slack)) |
| LOGGER_SLACK_LEVEL | string | The level of error to log to Slack |

### Logging
When you want to log something in the app, import utils/logger. This uses Winston under the hood, so take a look at [Winston's documentation](https://github.com/winstonjs/winston) if you want an in depth look at all the params you can pass to the logger.

Typical usage:

```javascript
logger.debug("Only logged in local");
logger.info("Logged in all environments");
logger.warn("Logged in all environments");
logger.error("Logged in all environments");
```

#### Slack
The logger is configured to log to the console in every environment. It's also ready to log to Slack in addition to the console, if desired. To enable this functionality:

1. Add a webhook to Slack: https://api.slack.com/messaging/webhooks
2. Set the `LOGGER_SLACK_WEBHOOK` environment variable to the resulting URL
3. Set the `LOGGER_SLACK_LEVEL` environment variable to the desired error level you want logged to Slack (e.g., `info`)