const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const request = require('superagent');

const userController = require('./user-controller.js');
const githubController = require('./github-controller.js');
const cardsRouter = require('./cards-router.js');
const main = express.Router();

const url = require('url');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/server', main);

main.get(
  '/github',
  githubController.authorize,
  githubController.token,
  (req, res) => {
    // return res.status(200).json(res.locals.authorized);
    // // redirect("http://localhost:3000/")
    // // .json(res.locals.authorized);
    res.redirect(url.format({
      pathname: "http://localhost:8080/",
      query: {
        username: res.locals.authorized.username,
      }
    }));
  }
);



main.post('/login', userController.verifyUser, (req, res) => {
  return res.status(200).json('logged in');
});

main.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

/** ROUTE FOR HANDLING CARDS FETCH REQUEST **/
main.use('/cards', cardsRouter);

/** SERVE STATIC ASSETS IN PRODUCTION MODE ONLY **/
if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  app.get('/', (res, req) => {
    req.sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
}
/** CATCH-ALL ROUTE HANDLER **/
app.use('*', (req, res) => {
  return res.status(404).json('Error: page not found');
});
/** GLOBAL ERROR HANDLER **/
app.use((err, req, res, next) => {
  if (err) return res.status(err.status).json(err);
  return res.status(500).json('Server error');
});
app.listen(3000, () => console.log(process.env.NODE_ENV));
