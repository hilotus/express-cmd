var logger = require('../lib/logger');

// definded error handler.
module.exports = function (app, apiRouter) {
  return app.use(function (err, req, res, next) {
    var statusCode = err.status || 500;
    logger.error(statusCode + ": " + err.message + ", \n " + (err.stack || ''));

    res.status(statusCode);
    return res.json({
      code: statusCode,
      error: err.message
    });
  });
};
