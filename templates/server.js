var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');

// mongo connect
var mongo = require('./config/mongo');
var logger = require('./lib/logger');

// MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(cookieParser());

app.set('port', process.env.PORT || 9292);
app.set('env', process.env.NODE_ENV || 'development');

// Before Filter
require('./middlewares/before-filter')(app);
// Access Log
require('./middlewares/morgan-log')(app);

// Routes Example
var rootRouter = express.Router();
var instanceRouter = express.Router();
var configurationRouter = express.Router({ mergeParams: true });
var translationRouter = express.Router({ mergeParams: true });

instanceRouter.use('/:hostname/configurations', configurationRouter);
instanceRouter.use('/:hostname/translations', translationRouter);
rootRouter.use('/instances', instanceRouter);

require('./routes/configuration')(configurationRouter);
require('./routes/translation')(translationRouter);
require('./routes/instance')(instanceRouter);

app.use('/1', rootRouter);

// Error handler (should be here)
require('./middlewares/error-handler')(app);

app.listen(app.get('port'), function () {
  logger.info('Server started, listened on ' + app.get('port') + '.');
  // connect with mongodb.
  mongo.connect(app.get('env'));
});

module.exports = app;
