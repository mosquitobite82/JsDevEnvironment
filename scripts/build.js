/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import {logError, logInfo, logSuccess, logWarning} from './consoleLogging';

const concatMessagesWithNewLine = (messages) => messages.reduce((acc, curr) => acc + '\n' + curr);
const logErrors = (errors) => logError('Webpack Errors:\n' + concatMessagesWithNewLine(errors));
const logWarnings = (warnings) => logWarning('Webpack Warnings:\n' + concatMessagesWithNewLine(warnings));

process.env.NODE_ENV = 'production';

logInfo('Generating minified bundle for prod...');

webpack(webpackConfig).run((err, stats) => {
 
  if(err){
    logError(err);
    return 1;
  }
  
  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return logErrors(jsonStats.errors);
  }

  if(jsonStats.hasWarnings){
    logWarnings(jsonStats.warnings);
  }

  logInfo(`Webpack stats: ${stats}`);
  logSuccess('App has been successfully built and written to /dist.');

  return 0;
});
