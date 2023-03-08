const bodyParser = require('body-parser');
const express = require('express');
const { createCategory, getCategories } = require('./controllers/category.controller');
const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
const validateToken = require('./Midllewares/auth/validateToken');
const validateDisplayName = require('./Midllewares/user/validateDisplayName');
const validateEmail = require('./Midllewares/user/validateEmail');
const validatePassword = require('./Midllewares/user/validatePassword');
const validateLogin = require('./Midllewares/validateLogin');

// ... 

const app = express();
app.use(bodyParser.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
app.post('/login', validateLogin, loginController);
app.post('/user', validateDisplayName, validateEmail, validatePassword, userController.createUser);
app.get('/user', validateToken, userController.getUsers);
app.get('/user/:id', validateToken, userController.getByUserId);
app.post('/categories', validateToken, createCategory);
app.get('/categories', validateToken, getCategories);

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
