const express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  path = require('path'),
  port = process.env.PORT || 80,
  host = process.env.HOST || 'epilef-curriculum.herokuapp.com';

const app = express();

app.use(history());
app.use(serveStatic(path.join(__dirname + '/dist/spa')));
app.listen(port, () => {
  console.log('The app is running...');
  console.log(`http://${host}:${port}`);
});
module.exports = app;
