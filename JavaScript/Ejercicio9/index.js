const winston = require("winston");

winston.addColors({
  error: "red",
  warn: "yellow",
  info: "cyan",
  debug: "green",
});

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console({ colorize: true }),
    new winston.transports.File({
      filename: "error.log",
      level: "error",
      colorize: true,
    }),
    new winston.transports.File({ filename: "combined.log", colorize: true }),
  ],
});

function mostrarError() {
  throw new Error("esto es un error");
}

logger.log("silly", "127.0.0.1 - there's no place like home");
logger.log("debug", "127.0.0.1 - there's no place like home");
logger.log("verbose", "127.0.0.1 - there's no place like home");
logger.log("info", "127.0.0.1 - there's no place like home");
logger.log("warn", "127.0.0.1 - there's no place like home");
logger.log("error", "127.0.0.1 - there's no place like home");

try {
  mostrarError();
} catch (error) {
  logger.log("error", error);
}
