require('dotenv').config();

const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

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

// Routes
app.get('/entries', listEntries);
app.post('/entries', newEntry);

app.get('/entries/:id', getEntry);
app.get('/entries/:id/votes', getEntryVotes);
app.post('/entries/:id/votes', voteEntry);
app.put('/entries/:id', editEntry);
app.delete('/entries/:id', deleteEntry);

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
  console.log(`Servidor funcionando 🚀`);
});
