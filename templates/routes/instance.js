module.exports = function(router) {
  router.route('/').get(function(req, res, next) {
    res.json({instances: []});
  });

  router.route('/:hostname').get(function(req, res, next) {
    res.json({hostname: req.params.hostname});
  });
};
