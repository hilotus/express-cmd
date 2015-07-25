var morgan = require('morgan');
var path = require('path');
var fs = require('fs');

module.exports = function (app) {
  var accessLogStream, env, logDirectory;

  logDirectory = path.join(__dirname, '../log');
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
  env = app.get('env');

  accessLogStream = require('file-stream-rotator').getStream({
    filename: logDirectory + '/access-' + env + '-%DATE%.log',
    frequency: 'daily',
    verbose: env === 'development',
    date_format: "YYYY-MM-DD"
  });
  return app.use(morgan('combined', {
    stream: accessLogStream
  }));
};
