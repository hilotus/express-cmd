var winston = require('winston');
var path = require('path');

var transports = [];
transports.push(new winston.transports.DailyRotateFile({
  name: 'system',
  datePattern: 'yyyy-MM-dd.log',
  filename: path.join(__dirname, '../log', 'system-'),
  json: false,
  level: 'info'
}));
transports.push(new winston.transports.Console({
  colorize: true
}));

var exceptionHandlers = [];
exceptionHandlers.push(new winston.transports.DailyRotateFile({
  name: 'exception',
  datePattern: 'yyyy-MM-dd.log',
  filename: path.join(__dirname, '../log', 'exception-'),
  json: false,
  level: 'debug'
}));
exceptionHandlers.push(new winston.transports.Console({
  colorize: true,
  level: 'debug'
}));

module.exports = new winston.Logger({
  transports: transports,
  exceptionHandlers: exceptionHandlers
});
