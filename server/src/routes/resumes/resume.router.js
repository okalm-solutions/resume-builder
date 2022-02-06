const express = require('express');
const {createResume, fetchResume} = require('./resume.controller');

const resumeRouter = express.Router();

resumeRouter.post('/create-pdf', createResume);
resumeRouter.get('/fetch-pdf', fetchResume)

module.exports = resumeRouter;

