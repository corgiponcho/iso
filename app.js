const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const posts = require('./server/routes/post');

app.use(express.static('./'));
app.use(express.static('dist'));

app.use(bodyParser.json());

app.use('/post', posts);

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

module.exports = app
