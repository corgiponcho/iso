const express = require('express')
const app = express()
const logger = require('logger').createLogger('development.log');
const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

app.use(express.static('./'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

app.listen(port, () => {
  logger.info('Example app listening on port ${port}')
});
