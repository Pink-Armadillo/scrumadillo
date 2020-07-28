const express = require('express');
const cardsController = require('./cards-controller.js');

const cardsRouter = express.Router();

//populates a 'deck' with stored technology cards
cardsRouter.get('/', cardsController.getCards, (req, res) => {
  return res.status(200).json(res.locals.cards);
});

module.exports = cardsRouter;
