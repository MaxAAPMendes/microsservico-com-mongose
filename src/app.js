const express = require('express');
const rotas = require('./routes');

const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
// app.use(helmet());
// app.use(morgan('combined'));
// app.use(cors());
rotas(app);

module.exports = app;
