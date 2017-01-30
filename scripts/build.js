/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for prod...'));

webpack(webpackConfig).run((err, stats) => {
  if(err){
    console.log(chalk.red(err));
    return 1;
  }
  // Verbose info to console
  
  const jsonStats = stats.toJson();

if(jsonStats.hasErrors){
  return jsonStats.errors.map(error => console.log(chalk.red(error)));
}
if(jsonStats.hasWarnings){
  console.log(chalk.yellow('Webpack Warnings generated:'))
  jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
}

console.log(`Webpack stats: ${stats}`);

// If this far, build succeeded
console.log(chalk.green('App has been successfully built and written to /dist.'));

  return 0;
});
