
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const pino = require('pino');
const pinoExpress = require('express-pino-logger');

const appRouter = require('./routes');

const desiredConfig = {
  appName: "APP_NAME",
  appPort: "APP_PORT",
  logLevel: "LOG_LEVEL"
}

const config = require('./config')(desiredConfig);
const logger = pino({ level: config.logLevel || 'silent' });
const app = express();

app.use(helmet());
app.use(cors({ origin: ["*"] }));
app.use(pinoExpress({ logger: logger }));

app.use(appRouter);

const server = app.listen(config.appPort, () => {
  logger.info(`${config.appName} listening on port ${config.appPort}`);
});

// Does this work?
process.on('SIGTERM', () => {
  logger.info(`SIGTERM signal received - closing Express server`);
  server.close(() => {
    logger.info(`Express server closed`);
  });
});
