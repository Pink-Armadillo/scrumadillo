const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'scrumadillo',
  })
  .then((data) => console.log('Connected to Mongo DEE BEE'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: String,
  todo: [
    {
      taskName: String,
      details: String,
    },
  ],
});

const Card = mongoose.model('card', cardSchema);

const boardSchema = new Schema({
  todo: [
    {
      cardName: String,
      card_id: {
        type: Schema.Types.ObjectId,
        ref: 'card',
      },
    },
  ],
  inProgress: {
    cardName: String,
    tasks: [
      {
        taskName: String,
        taskDetails: String,
        completed: Boolean,
      },
    ],
  },
  complete: [
    {
      cardName: String,
      card_id: {
        type: Schema.Types.ObjectId,
        ref: 'card',
      },
    },
  ],
});

const Board = mongoose.model('board', boardSchema);

const userSchema = new Schema({
  username: String,
  password: String,
  currentBoard: {
    type: Schema.Types.ObjectId,
    ref: 'board',
  },
});

const User = mongoose.model('user', userSchema);

module.exports = { Card };
