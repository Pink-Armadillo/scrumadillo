const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const request = require('superagent');

const userController = require('./user-controller.js');
const githubController = require('./github-controller.js');
const boardController = require('./board-controller.js');

const cardsRouter = require('./cards-router.js');
const main = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/server', main);

main.get('/github', githubController.authorize, githubController.token, (req, res) => {
  return res.status(200).json(res.locals.authorized);
});

main.post('/login', userController.verifyUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

main.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

main.get('/boardState/:username', boardController.getBoard, (req, res) => {
  return res.status(200).json(res.locals.board);
});
main.post('/boardState', boardController.saveBoard, (req, res) => {
  return res.status(200).json(res.locals.board);
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
