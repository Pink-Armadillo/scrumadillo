const { User } = require('./models/models.js');
const request = require('superagent');

const githubController = {};

githubController.authorize = (req, res, next) => {
  const { query } = req;
  const { code } = query;
  // post request with code
  request
    .post('https://github.com/login/oauth/access_token')
    .send({
      client_id: 'fade47f049a7b9f4a3dc',
      client_secret: '927eba2bb044fded4ae56cf2e26cda3152d6135e',
      code: code,
    })
    .set('Accept', 'application/json')
    .then((result) => {
      const { body } = result;
      const { access_token } = body;
      res.locals.token = access_token;
      return next();
    })
    .catch((err) => next(err));
};

githubController.token = (req, res, next) => {
  const accessToken = res.locals.token;
  request
    .get('https://api.github.com/user')
    .set('Authorization', 'token ' + accessToken)
    // set user agent username
    .set('User-Agent', 'test')
    .then((result) => {
      // redirect to root with user info from body
      const userInfo = result.body;
      res.locals.authorized = userInfo;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};
module.exports = githubController;
