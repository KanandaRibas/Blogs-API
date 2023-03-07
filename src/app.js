const bodyParser = require('body-parser');
const express = require('express');
const loginController = require('./controllers/login.controller');
const validateLogin = require('./Midllewares/validateLogin');

// ... 

const app = express();
app.use(bodyParser.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
app.post('/login', validateLogin, loginController);

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
