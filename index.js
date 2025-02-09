// index.js

const express = require('express');
const cors = require('cors');
const classifyNumRoute = require('./src/route/classifyNumberRoutes');

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use('/api', classifyNumRoute);

module.exports = app;
