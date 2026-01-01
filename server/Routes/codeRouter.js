const express = require('express');
const codeExcecuter=require('../controllers/codeExcecuter');
const rateLimiter = require('../middleware/rateLimiter');
const codeRouter = express.Router();
codeRouter.post('/run',rateLimiter,codeExcecuter);
module.exports = codeRouter;