const express = require('express');
const cardsController = require('./cards-controller.js');

const cardsRouter = express.Router();

cardsRouter.get('/', cardsController.getCards, (req, res) => {
  return res.status(200).json(res.locals.cards);
});

module.exports = cardsRouter;
