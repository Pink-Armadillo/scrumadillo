const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const cardsRouter = require('./cards-router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../dist')));

  app.get('/', (res, req) => {
    req.sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
}

app.use('*', (req, res) => {
  return res.status(404).json('Error: page not found');
});

app.use((err, req, res, next) => {
  if (err) return res.status(err.status).json(err);
  return res.status(500).json('Server error');
});

app.listen(3000, () => console.log('Listening on port 3000'));
