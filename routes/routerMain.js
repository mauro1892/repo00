const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerMain');
router.get('/', controller.index);

module.exports = router;