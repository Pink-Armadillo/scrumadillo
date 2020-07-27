const { Board } = require('./models/models.js');

const boardController = {};

boardController.saveBoard = (req, res, next) => {
  let boardData = req.body.card;
  //   console.log(req.body);
  Board.create(
    {
      ...boardData,
    },
    (err, board) => {
      if (err) return next(err);

      res.locals.board = board;
      return next();
    }
  );
};

module.exports = boardController;
