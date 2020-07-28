const { Card } = require('./models/models.js');

const cardsController = {};

//populates a 'deck' with stored technology cards and returns them to client
cardsController.getCards = (req, res, next) => {
  Card.find({})
    .then((data) => {
      res.locals.cards = data;
      return next();
    })
    .catch((err) => next(err));
};

module.exports = cardsController;
