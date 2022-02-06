const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");
const morgan = require('morgan');

const resumeRouter = require('./routes/resumes/resume.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
  }));

  app.use(morgan('combined'));
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(resumeRouter);
  
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

module.exports = app;