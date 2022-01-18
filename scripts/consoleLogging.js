import chalk from 'chalk';

const log = console.log;

export const logSuccess = (message) => log(chalk.green(message));
export const logInfo = (message) => log(chalk.blue(message));
export const logWarning = (message) => log(chalk.yellow(message));
export const logError = (message) => log(chalk.red(message));
