var AuthError = require('../lib/errors').AuthError;

module.exports = function(app) {
  return app.use(function (req, res, next) {
    var origin = req.get('origin');
    if (origin) {
      res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Content-Type', 'application/json; charset=UTF-8');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if ('OPTIONS' === req.method || req.path === '/favicon.ico') {
      return res.status(204).end();
    }

    // TODO: You can write your auth logic.
    if (!req.get('X-Access-Token')) {
      return next(new AuthError());
    } else {
      return next();
    }
  });
};
