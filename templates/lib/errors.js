var i18n = require('../config/i18n');

var hasProp = {}.hasOwnProperty;
var extend = function (child, parent) {
  for (var key in parent) {
    if (hasProp.call(parent, key))
      child[key] = parent[key];
  }
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
  child.__super__ = parent.prototype;
  return child;
};

var AuthError = (function (superClass) {
  extend(AuthError, superClass);

  function AuthError(message) {
    this.status = 401;
    this.message = message || i18n.t('errorHandling.authRequired');
    AuthError.__super__.constructor.call(this, this.message);
  }

  return AuthError;
})(Error);

var ReqError = (function (superClass) {
  extend(ReqError, superClass);

  function ReqError(message) {
    this.status = 400;
    this.message = message || i18n.t('errorHandling.badRequest');
    ReqError.__super__.constructor.call(this, this.message);
  }

  return ReqError;
})(Error);

module.exports = {
  AuthError: AuthError,
  ReqError: ReqError
};
