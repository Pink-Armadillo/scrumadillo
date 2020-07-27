const { User } = require('./models/models.js');
const request = require('superagent');
require('dotenv').config();

const githubController = {};

githubController.authorize = (req, res, next) => {
  const { query } = req;
  const { code } = query;
  // post request with code
  request
    .post('https://github.com/login/oauth/access_token')
    .send({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
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
      // const userInfo = result.body;
      const username = result.body.login;
      const password = result.body.id;
      User.findOne({ username: username, password: password }, (error, user) => {
        if (error) {
          return next(error)
        } else {
          if (user === null) {
            User.create({ username: username, password: password }, (err, us) => {
              if (err) {
                return next(err)
              } else {
                res.locals.authorized = us;
                console.log('usercreated')
                return next();
              }
            })
          } else {
            res.locals.authorized = user 
            console.log('usercreated2')
            return next();
          }
        }
      })
    })
    .catch((err) => {
      return next(err);
    });
};
module.exports = githubController;
