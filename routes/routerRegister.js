const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerRegister');
router.get('/', controller.index);

module.exports = router;