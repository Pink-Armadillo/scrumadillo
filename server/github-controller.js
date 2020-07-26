const { User } = require('./models/models.js');

const githubController = {};

githubController.authorize = (req, res, next) => {
  const { query } = req;
  const { code } = query;
  res.locals.code = code;
  return next();
};

module.exports = githubController;
