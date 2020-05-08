require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const { register, login, info } = require('./controllers/users');
const { onlyAdmin, onlyUsers } = require('./controllers/protected');
const { userAuthenticated, userIsAdmin } = require('./middlewares/auth');

const port = process.env.PORT;

const app = express();

//Add common middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Users Routes
app.post('/users', register);
app.post('/users/login', login);
app.get('/users/:id', userAuthenticated, info);

// Protected Routes
app.get('/only-users', userAuthenticated, onlyUsers);
app.get('/only-admin', userAuthenticated, userIsAdmin, onlyAdmin);

//Error and notfound middlewares
app.use((error, req, res, next) => {
  res
    .status(error.httpCode || 500)
    .send({ status: 'error', message: error.message });
});

app.use((req, res) => {
  res.status(404).send('Not found 😢');
});

app.listen(port, () => {
  console.log(`Server listening request on http://localhost:${port} 🤪`);
});
