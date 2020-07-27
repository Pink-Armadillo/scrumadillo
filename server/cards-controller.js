const { Card } = require('./models/models.js');

const cardsController = {};

cardsController.getCards = (req, res, next) => {
  Card.find({})
    .then((data) => {
      res.locals.cards = data;
      return next();
    })
    .catch((err) => next(err));
};

module.exports = cardsController;
