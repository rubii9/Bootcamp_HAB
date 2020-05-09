require('dotenv').config();

const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');

const { register, login, info } = require('./controllers/users');
//const { onlyAdmin, onlyUsers } = require('./controllers/protected');
const { userAuthenticated, userIsAdmin } = require('./middlewares/auth');

const app = express();
const port = process.env.PORT;

// Controllers
const {
  listEntries,
  newEntry,
  getEntry,
  deleteEntry,
  editEntry,
  voteEntry,
  getEntryVotes
} = require('./controllers/diary');

// Console logger middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(bodyParser.json());

// Multipart parsing middleware
app.use(fileUpload());

// CORS middleware
app.use(cors());

// Serve static
app.use(express.static(path.join(__dirname, 'static')));

// Routes
app.get('/entries', listEntries);

app.get('/entries/:id', getEntry);
app.get('/entries/:id/votes', getEntryVotes);

app.post('/users', register);
app.post('/users/login', login);

//need login
app.post('/entries/:id/votes', userAuthenticated, voteEntry);
app.get('/users/:id', userAuthenticated, info);
app.post('/entries', userAuthenticated, newEntry);

//only admin
app.put('/entries/:id', userAuthenticated, userIsAdmin, editEntry);
app.delete('/entries/:id', userAuthenticated, userIsAdmin, deleteEntry);

//public

/* app.get('/only-users', userAuthenticated, onlyUsers);
app.get('/only-admin', userAuthenticated, userIsAdmin, onlyAdmin); */

// Error middleware
app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.httpCode || 500).send({
    status: 'error',
    message: error.message
  });
});

// Not found middleware
app.use((req, res) => {
  res.status(404).send({ status: 'error', message: 'Not found' });
});

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port} 🚀`);
});
