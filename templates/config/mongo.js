var yaml = require('js-yaml');
var ejs = require('ejs');
var fs = require('fs');
var path = require('path');
var queryString = require('query-string');
var mongoose = require('mongoose');

var logger = require('../lib/logger');

var dbURI = 'mongodb://';

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function (aaa, bbb, ccc) {
  logger.info('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  logger.error('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  logger.info('Mongoose default connection disconnected');
});

// When the connection is open
mongoose.connection.on('open', function () {
  logger.info('Mongoose default connection is open');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    logger.info('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports.connect = function (env) {
  var dbFile = yaml.safeLoad(ejs.render(fs.readFileSync(path.resolve(__dirname, '../config/mongo.yml'), 'UTF-8')));
  var dbcf = dbFile[env];

  // Build the connection string
  if (dbcf.username && dbcf.password) {
    dbURI += encodeURIComponent(dbcf.username) + ':' + encodeURIComponent(dbcf.password) + '@';
  }

  dbURI += dbcf.host + ':' + dbcf.port + '/' + dbcf.database + '?v=1&';

  if (dbcf.options) {
    dbURI += queryString.stringify(dbcf.options);
  }

  // Create the database connection
  mongoose.connect(dbURI);
}
