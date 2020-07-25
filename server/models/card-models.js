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
      task: String,
      details: String,
      completed: Boolean,
    },
  ],
});

const Card = mongoose.model('card', cardSchema);

// Card.create({
//   name: 'Test',
//   todo: [
//     {
//       task: 'do something',
//       details: 'do something with details',
//       completed: false,
//     },
//   ],
// });

module.exports = { Card };
