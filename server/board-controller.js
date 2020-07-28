const { Board, User } = require('./models/models.js');

const boardController = {};

//saves current board state and assigns the logged in user to username
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

//retrieves board state data by username
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
