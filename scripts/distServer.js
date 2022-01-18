/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import { logError } from './consoleLogging';

const port = 8088;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  res.json([
{"id": 1, "firstName": "Johannes", "lastName": "Lindgren", "email": "johannes.lindgren@jmail.com" },
{"id": 2, "firstName": "John", "lastName": "Doe", "email": "john.doe@jmail.com" },
{"id": 3, "firstName": "Jane", "lastName": "Doe", "email": "jane.doe@jmail.com" },
{"id": 4, "firstName": "Jack", "lastName": "Jill", "email": "jack.jill@jmail.com" }
  ]);
});

app.listen(port, function(err){
  if(err){
    logError(err);
  } else {
    open('http://localhost:' + port);
  }

});
