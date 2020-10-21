require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT;

const {
  listPhotos,
  newPhoto,
  deletePhoto,
  editPhoto,
  likePhoto
} = require('./controllers/photos');

// Console logger middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(bodyParser.json());

// Multipart parsing middleware
app.use(fileUpload());

// CORS middleware
app.use(cors());

// Serve static files
app.use(
  process.env.PUBLIC_PATH,
  express.static(path.join(__dirname, process.env.UPLOADS_DIR))
);

// Routes
app.get('/photos', listPhotos);
app.post('/photos', newPhoto);
app.delete('/photos/:id', deletePhoto);
app.put('/photos/:id', editPhoto);
app.post('/photos/:id/like', likePhoto);

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
