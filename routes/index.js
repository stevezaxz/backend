
const express = require('express');

const routes = express.Router();

const jobs = require("../apps/jobs/index");
const notes = require("../apps/notes/index");

routes.use('/jobs', jobs())
routes.use('/notes', notes())


module.exports = routes;