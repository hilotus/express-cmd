var i18n = require('../config/i18n');

module.exports = function (app) {
  app.use(i18n.handle);
}
