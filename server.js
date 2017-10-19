const express = require('express')
const app = express()
const logger = require('logger').createLogger('development.log');
const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const posts = require('./server/routes/post');

app.use(express.static('./'));
app.use(express.static('dist'));

app.use(bodyParser.json());

app.use('/post', posts);

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

const server = app.listen(port, () => {
  logger.info('Example app listening on port ${port}')
});

module.exports = server