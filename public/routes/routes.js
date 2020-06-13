const express = require('express');
const app = express();
const routes = express.Router();
const path = require('path');

// onde irão ficar os arquivos públicos acessados pela aplicação
app.use(express.static(path.join(__dirname, 'public')));

// fazendo com que possa usar html para as views do chat
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(routes);

module.exports = app;