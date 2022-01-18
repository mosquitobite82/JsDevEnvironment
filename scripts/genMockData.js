/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import { logError, logSuccess } from './consoleLogging';

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, function(err){
  if(err){
    logError(err);
  } else {
    logSuccess('Mock data generated');
  }
});
