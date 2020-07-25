const db = require('./models/card-models.js');

const cardsController = {};

cardsController.getCards = (req, res, next) => {
  console.log(req.body);
  return next();
};

module.exports = cardsController;
