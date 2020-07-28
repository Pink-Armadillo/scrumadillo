const { User } = require('./models/models.js');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  //   console.log(username, password);
  User.create({ username: username, password: password }, (err, user) => {
    console.log('user', user);
    if (err) return next(err);

    res.locals.user = user;
    return next();
  });
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) return next(err);
    if (password === user.password) {
      res.locals.user = user;
      return next();
    } else
      return next({
        error: 'Username and Password combination was not found.',
        status: 401,
      });
  });
};

module.exports = userController;
