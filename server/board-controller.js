const { Board, User } = require('./models/models.js');

const boardController = {};

boardController.saveBoard = (req, res, next) => {
  let boardData = req.body.card;
  console.log('boardData ', boardData);

  Board.update(
    { username: boardData.username },
    {
      ...boardData,
    },
    { upsert: true },
    (err, board) => {
      if (err) return next(err);

      res.locals.board = board;
      return next();
    }
  );
};

boardController.getBoard = (req, res, next) => {
  let username = req.params.username;
  Board.findOne(
    {
      username: username,
    },
    (err, board) => {
      if (err) return next(err);
      res.locals.board = board;
      return next();
    }
  );
};

module.exports = boardController;
