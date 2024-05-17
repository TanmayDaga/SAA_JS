const colors = require('colors');

/**
 * @typedef {"info" | "error" | "success" | "debug"} LogLevel
 */
/**
 * Logs a message with a specified level.
 * 
 * @param {string} message - The message to log.
 * @param {LogLevel} [level="info"] - The level of the log (info, error, success, debug).
 */
function logger(message, level = "info") {
  const timestamp = new Date().toISOString();
  let coloredMessage;

  switch (level) {
    case "error":
      coloredMessage = colors.red(`[${timestamp}] [ERROR] ${message}`);
      break;
    case "success":
      coloredMessage = colors.green(`[${timestamp}] [SUCCESS] ${message}`);
      break;
    case "debug":
      coloredMessage = colors.gray(`[${timestamp}] [DEBUG] ${message}`);
      break;
    default:
      coloredMessage = colors.white(`[${timestamp}] [INFO] ${message}`);
      break;
  }

  console.log(coloredMessage);
}

module.exports = logger;
