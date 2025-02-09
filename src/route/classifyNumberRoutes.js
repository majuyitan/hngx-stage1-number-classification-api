// src/route/classifyNumberRoutes.js

const express = require('express');
const { classifyNumber } = require('../controller/classifyNumber');

const router = express.Router();

router.get('/api/classify-number', classifyNumber);

module.exports = router;
