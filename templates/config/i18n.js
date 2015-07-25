var i18n = require('i18next');
var path = require('path');

configDir = path.join(__dirname, '../config')

// I18n Config
// http://i18next.com/node/pages/doc_init.html
i18n.init({
  detectLngQS: 'locale',
  lngWhitelist: ['en-us', 'zh-cn'],
  resGetPath: configDir + "/locales/__lng__/__ns__.json",
  ns: {namespaces: ['ns.special'], defaultNs: 'ns.special'},
  // You cloud set debug true to see the output.
  debug: false,
  lowerCaseLng: true,
  fallbackLng: ['en-us'],
  useCookie: false,
  detectLngFromLocalStorage: false
});

module.exports = i18n;
